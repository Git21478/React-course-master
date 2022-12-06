import s from "./FormsControls.module.css"

export const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={s.formControl + " " + s.error}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            <span>"some error"</span>
        </div>
    )
}