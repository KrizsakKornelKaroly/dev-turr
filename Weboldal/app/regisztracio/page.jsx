"use client"
import Image from "next/image";
import useHandleRegisterForm from "../hooks/useHandleRegisterForm";
import Link from "next/link";

function Page() {
  const {
    passwordError,
    emailError,
    usernameError,
    handleUsernameChange,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  } = useHandleRegisterForm();

  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row">
        <div className="lg:w-1/2 h-[17vh] lg:h-screen bg-gradient-to-r from-podcasthatter to-navmenu flex items-center justify-center">
          <div className="bg-podcasthatter rounded-l-2xl rounded-r-2xl">
          <Image
              src="/images/turr100-2.png"
              alt="Turr logo"
              layout="responsive"
              width={0}
              height={0}
              sizes="(max-width: 1023px) 125px, (min-width: 651px) 400px"
              priority
            />
          </div>
        </div>

        <div className="flex-grow flex flex-col items-center justify-center lg:w-1/2 lg:px-8">
          <form onSubmit={handleSubmit} className="w-full max-w-md text-center">
            <div className="flex flex-col gap-9">
              <label htmlFor="username">
                <input
                  onChange={handleUsernameChange}
                  required
                  type="username"
                  name="username"
                  id="username"
                  placeholder="Felhasználónév"
                  className="w-[90%] sm:w-full h-[50px] px-3 py-2 text-lg bg-navmenu rounded-[45px] placeholder-black"
                />
                <div>
                  <span className="text-red-500">
                    {usernameError ? <span>{usernameError}</span> : null}
                  </span>
                </div>
              </label>

              <label htmlFor="email">
                <input
                  onChange={handleEmailChange}
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                  className="w-[90%] sm:w-full h-[50px] px-3 py-2 text-lg bg-navmenu rounded-[45px] placeholder-black"
                />
                <div>
                  <span className="text-red-500">
                    {emailError ? <span>{emailError}</span> : null}
                  </span>
                </div>
              </label>

              <label htmlFor="password">
                <input
                  onChange={handlePasswordChange}
                  required
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Jelszó"
                  className="w-[90%] sm:w-full h-[50px] px-3 py-2 text-lg bg-navmenu rounded-[45px] placeholder-black"
                />
                <div>
                  <span className="text-red-500">
                    {passwordError ? <span>{passwordError}</span> : null}
                  </span>
                </div>
              </label>
            </div>
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-[45px]"
            >
              Regisztráció
            </button>
          </form>
         <div className="mt-5">
         <span>
            Van fiókod?{" "}
            <Link href="/" className="underline text-lablec transition duration-300 hover:opacity-80">Bejelentkezés</Link>
          </span>
         </div>
        </div>
      </div>
    </>
  );
}

export default Page;
