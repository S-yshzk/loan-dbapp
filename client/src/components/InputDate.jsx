import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "./Input.css";
export default function InputDate({date, setDate}) {
  return (
        <DatePicker value={date} onChange={(newValue) => setDate(newValue)} />
  );
}