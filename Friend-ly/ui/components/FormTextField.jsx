function FormTextField (props) {
    // props: { label: string, value: string, onChange: function }
  return (
    <div>
      <label>{props.label}</label>
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}