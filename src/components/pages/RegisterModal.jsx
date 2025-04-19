import { useForm } from "react-hook-form";

export default function RegisterModal({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    // Сохраняем данные в localStorage
    localStorage.setItem("user", JSON.stringify({
      email: data.email,
      username: data.username,
      password: data.password,
    }));
    
    alert("Registration successful!");
    onClose();  // Закрыть модалку после регистрации
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal">
        <form onSubmit={handleSubmit(onSubmit)} className="register-form">
          <h2 className="form-title">Register</h2>

          <div className="form-group">
            <label>Username</label>
            <input
              {...register("username", {
                required: "Username is required",
                minLength: { value: 3, message: "Username must be at least 3 characters" },
              })}
              className={errors.username ? "input-error" : ""}
            />
            {errors.username && <p className="error-message">{errors.username.message}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" },
              })}
              className={errors.password ? "input-error" : ""}
            />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>

          <button type="submit">Register</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
}
