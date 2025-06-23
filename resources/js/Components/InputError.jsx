export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p
            {...props}
            className={'text-sm text-red-600 w-full bg-red-100 border border-red-200 p-2 rounded-md ' + className}
        >
            {message}
        </p>
    ) : null;
}
