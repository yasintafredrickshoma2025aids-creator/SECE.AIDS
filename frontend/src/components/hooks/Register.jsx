
import { useState } from 'react'

const validateField = (field, value) => {
    if (field === 'name') {
        const name = value.trim()
        if (!name) return 'Name is required.'
        if (name.length < 3) return 'Name must contain at least 3 characters.'
    }

    if (field === 'email') {
        if (!value.trim()) return 'Email is required.'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
            return 'Enter a valid email address.'
        }
    }

    if (field === 'password') {
        if (!value) return 'Password is required.'
        if (
            value.length < 8 ||
            !/[A-Z]/.test(value) ||
            !/[a-z]/.test(value) ||
            !/\d/.test(value)
        ) {
            return 'Use at least 8 characters with an uppercase letter, a lowercase letter, and a number.'
        }
    }

    return ''
}

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({})
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((currentFormData) => ({
            ...currentFormData,
            [name]: value
        }))
        setErrors((currentErrors) => {
            if (!hasSubmitted && !currentErrors[name]) return currentErrors
            return { ...currentErrors, [name]: validateField(name, value) }
        })
        setSuccessMessage('')
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setHasSubmitted(true)

        const nextErrors = {
            name: validateField('name', formData.name),
            email: validateField('email', formData.email),
            password: validateField('password', formData.password)
        }
        setErrors(nextErrors)

        if (Object.values(nextErrors).some(Boolean)) {
            setSuccessMessage('')
            return
        }

        setSuccessMessage('Registration successful.')
    };

    return (
        <section className="register-section">
            <h1>Register Form</h1>

            <form className="registration-form" noValidate onSubmit={handleSubmit}>
                <div className="registration-field">
                    <label htmlFor="name">Name:</label>
                    <input
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        aria-invalid={Boolean(errors.name)}
                        autoComplete="name"
                        className={errors.name ? 'registration-input registration-input-invalid' : 'registration-input'}
                        id="name"
                        minLength={3}
                        name="name"
                        onChange={handleChange}
                        required
                        type="text"
                        value={formData.name}
                    />
                    {errors.name && <p className="registration-error" id="name-error" role="alert">{errors.name}</p>}
                </div>

                <div className="registration-field">
                    <label htmlFor="email">Email:</label>
                    <input
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        aria-invalid={Boolean(errors.email)}
                        autoComplete="email"
                        className={errors.email ? 'registration-input registration-input-invalid' : 'registration-input'}
                        id="email"
                        name="email"
                        onChange={handleChange}
                        required
                        type="email"
                        value={formData.email}
                    />
                    {errors.email && <p className="registration-error" id="email-error" role="alert">{errors.email}</p>}
                </div>

                <div className="registration-field">
                    <label htmlFor="password">Password:</label>
                    <input
                        aria-describedby={errors.password ? 'password-error' : undefined}
                        aria-invalid={Boolean(errors.password)}
                        autoComplete="new-password"
                        className={errors.password ? 'registration-input registration-input-invalid' : 'registration-input'}
                        id="password"
                        minLength={8}
                        name="password"
                        onChange={handleChange}
                        required
                        type="password"
                        value={formData.password}
                    />
                    {errors.password && <p className="registration-error" id="password-error" role="alert">{errors.password}</p>}
                </div>

                <button type="submit">Register</button>
                {successMessage && <p className="registration-success" role="status">{successMessage}</p>}
            </form>
        </section>
    );
};

export default Register;
