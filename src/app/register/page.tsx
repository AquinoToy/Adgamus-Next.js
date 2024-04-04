function RegisterPage() {
    return (

<div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
<div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div>
        <img 
            src= 'public/images/AgamusBanner.png'
             className="mx-auto w-full lg:max-w-2xl" 
        />
        </div>
        <div className="mt-12 flex flex-col items-center">
            <div className="w-full flex-1 mt-8">

                <div className="mx-auto max-w-xs">
                    <input
                        className=" w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="text" placeholder="Nombre de usuario" name='username' />
                    <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="email" placeholder="Correo Electronico" name='email' />
                    <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="password" placeholder="Contraseña" name='password'/>
                    <button
                        className="mt-5 tracking-wide font-semibold bg-green-800 text-white-500 w-full py-4 rounded-lg hover:bg-green-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                        <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor">   
                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                            <circle cx="8.5" cy="7" r="4" />
                            <path d="M20 8v6M23 11h-6" />
                        </svg>  
                        <span className="ml-">
                            Registrar
                        </span>
                    </button>
                    <p className="mt-6 text-xs text-gray-600 text-center">
                        ¿Ya tienes una cuenta?
                        <a href="#" className="border-b border-gray-500 border-dotted">
                            Iniciar Sesión
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className="flex-1 bg-green-800 text-center hidden lg:flex">
        <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("https://drive.google.com/uc?export=view&id=1KZ_Ub_2lZ0dHbKV0fAIhxVhiQA183RCz")' }}>
        </div>
    </div>
</div>
</div>

    )
}

export default RegisterPage