import styles from '../styles/contact.module.css'
import Nav from '../components/nav/nav'
import { useForm } from "react-hook-form";
import { useState } from 'react';


export default function About () {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState('')

    const onSubmit = data => {
        setName(data.name)
        setEmail(data.email)
        setMessage(data.message)
        fetch('./api/contact', {
            method: 'post',
            body: JSON.stringify(data),
          });
        setSuccess("Message sent. Thanks!")
    }
    return (
        <div className={styles.container}>
            <Nav/>
            <div className={styles.contactContainer}>
                <h1>Get in touch!</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.inputContainer}>

                        <input className={styles.input} placeholder="name..." {...register("name", { required: true })} />
                        
                        {/* include validation with required or other standard HTML validation rules */}
                        <input className={styles.input} placeholder="email..." {...register("email", { required: true })} />
                        <textarea className={`${styles.input} ${styles.textarea}`} placeholder="message..." {...register("message", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}
            
                        <input className={styles.button} type="submit" />
                    </div>
                </form>
                <p className={styles.success}>{success}</p>
            </div>
        </div>
    )
} 