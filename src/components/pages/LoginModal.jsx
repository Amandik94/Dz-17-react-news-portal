import { useForm } from "react-hook-form";

export default function LoginModal({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const user = JSON.parse(localStorage.getItem("user"));

    // Проверка данных с сохраненными в localStorage
    if (user && user.email === data.email && user.password === data.password) {
      alert("Login successful!");
      localStorage.setItem("isAuthenticated", "true");  // Устанавливаем статус аутентификации
      onClose();  // Закрыть модалку
    } else {
      alert("Invalid email or password");
    }
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal">
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <h2 className="form-title">Login</h2>

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
              })}
              className={errors.password ? "input-error" : ""}
            />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>

          <button type="submit">Login</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
}
