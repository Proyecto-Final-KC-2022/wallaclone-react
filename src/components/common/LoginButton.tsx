const style = {
  loginButtonWrapper: "flex w-full items-center justify-center bg-white hover:bg-[#13c1ac] rounded-[21px] border border-[#13c1ac] px-2 h-[42px] text-[#13c1ac] hover:text-white",
  loginText: "flex text-center text-sm px-2"
}

const LoginButton = () => {
  return (
    <button className={style.loginButtonWrapper}>
      <span className={style.loginText}>Regístrate o inicia sesión</span>
    </button>
  )
}

export default LoginButton