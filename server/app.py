from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg

connection = psycopg.connect(
    host='localhost',
    dbname='loan',
    user='postgres',
    password='password',
)
app = Flask(__name__)
cors = CORS(app)

@app.route("/person")
def getPerson():
    sql = '''
    SELECT * from 人物データ;
    '''
    cursor = connection.cursor()
    cursor.execute(sql)
    results = cursor.fetchall()

    person_list = []
    for result in results:
        person_data = {
            "人物id": result[0], 
            "名前": result[1],
            "人物情報": result[2]
        }
        person_list.append(person_data)

    return jsonify(person_list)


@app.route("/personcount")
def getPersonCount():
    sql = '''
    SELECT COUNT(*) FROM 人物データ;
    '''
    cursor = connection.cursor()
    cursor.execute(sql)
    results = cursor.fetchone()
    
    return jsonify({"登録人数":results[0]})

@app.route("/person", methods=["post"])
def postPerson():
    content = request.get_json()
    # getPersonCount()の結果をJSONデータとして取得
    count_data = getPersonCount().get_json()
    
    # JSONデータから登録人数を取得して新しい人物IDを生成
    id = count_data["登録人数"] + 1
    
    try:
        sql = f'''
        INSERT INTO 人物データ (人物ID, 名前, 人物情報) 
        VALUES ({id}, '{content['名前']}', '{content['人物情報']}');
        '''
        connection.execute(sql)
    except Exception:
        connection.rollback()
    else:
        connection.commit()
    
    return getPersonCount()
