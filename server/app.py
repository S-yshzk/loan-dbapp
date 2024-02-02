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
    # JSONデータから登録人数を取得して新しい人物IDを生成    
    print(content["名前"])
    try:
        sql = '''
        INSERT INTO 人物データ (名前, 人物情報) 
        VALUES (%s, %s);
        '''
        # データをタプルで指定
        data = (content['名前'], content['人物情報'])
        connection.execute(sql, data)
    except Exception:
        connection.rollback()
    else:
        connection.commit()
    
    return getPersonCount()


@app.route("/loan", methods=["post"])
def postLoan():
    content = request.get_json()
    sql = f'''
    insert into 立て替えデータ (立て替え情報, 人物ID, 立て替え金額, 立て替え日, 返済予定日, 返済済み)
    values (%s, %s, %s, %s, %s, false);
    '''
    data = (content['info'], content['人物id'], content['price'], content['date'], content['repayDate'])
    try:
        connection.execute(sql, data)
    except Exception:
        connection.rollback()
        return {"masseage":"失敗"}
    else:
        connection.commit()
        return {"masseage":"成功"}


    
@app.route("/loan", methods=["get"])
def getLoan():
    sql = '''
    SELECT * FROM 立て替えデータ
    LEFT JOIN 人物データ ON 立て替えデータ.人物ID = 人物データ.人物ID;
    '''
    cursor = connection.cursor()
    cursor.execute(sql)
    results = cursor.fetchall()

    person_list = []
    for result in results:
        person_data = {
            "立て替えID": result[0], 
            "人物ID": result[1],
            "立て替え金額": result[2],
            "立て替え日": result[3],
            "返済予定日": result[4],
            "返済済み" : result[5],
            "立て替え情報": result[6],
            "名前": result[8],
        }
        person_list.append(person_data)
    return jsonify(person_list)


@app.route("/check", methods=["post"])
def postCheck():
    content = request.get_json()
    print(content["返済状態"])
    sql = '''
    UPDATE 立て替えデータ SET 返済済み=%s WHERE 立て替えID = %s;
    '''
    try:
        connection.execute(sql, content["返済状態"], int(content["立て替えID"]))
    except Exception:
        connection.rollback()
        return {"masseage":"失敗"}
    else:
        connection.commit()
        return {"masseage":"成功"}