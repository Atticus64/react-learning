import '../App.css'

export default function MyButton({ myFunc, message  }) {
  return (
    <button className='btn' onClick={myFunc}>{ message ?? 'Click me!' }</button>
  );
}
