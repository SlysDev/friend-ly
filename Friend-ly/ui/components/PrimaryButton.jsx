export default function PrimaryButton ({text, onClick, color}) {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
}