export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `block text-md font-bold text-black-200 input3`
            }
        >
            {value ? value : children}
        </label>
    );
}
