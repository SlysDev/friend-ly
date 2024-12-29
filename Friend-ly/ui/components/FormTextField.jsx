export default function FormTextField ({type, placeholder, value, onChange}) {
    // props: { label: string, value: string, onChange: function }
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}