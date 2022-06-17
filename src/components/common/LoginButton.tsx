const style = {
  loginButtonWrapper: "flex w-full min-w-[200px] items-center justify-center text-center bg-white hover:bg-[#13c1ac] rounded-[21px] border border-[#13c1ac] px-2 h-[42px] text-[#13c1ac] hover:text-white",
  loginText: "flex text-center items-center text-[.875rem]"
}

const LoginButton = () => {
  return (
    <button className={style.loginButtonWrapper}>
      <span className={style.loginText}>Regístrate o inicia sesión</span>
    </button>
  )
}

export default LoginButton