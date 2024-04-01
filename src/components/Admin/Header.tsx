import Button from "../Header/Button";
const Header = () => {
    return (
        <div>
            <header className="flex items-center justify-between p-4">
                <div>
                    <img className="w-36" src="./src/assets/images/logo.svg" alt="" />
                </div>
                <div className="md:hidden lg:block [@media(max-width:431px)]:hidden">
                    <form action="">
                        <div className="relative">
                            <input type="text" className="lg:w-[413px] h-[46px] bg-white rounded-xl pl-5"/>
                            <button className="absolute top-1/2 -translate-y-1/2 right-5"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1127 9.05627C16.1127 12.9533 12.9535 16.1125 9.05634 16.1125C5.15922 16.1125 2 12.9533 2 9.05627C2 5.15921 5.15922 2 9.05634 2C12.9535 2 16.1127 5.15921 16.1127 9.05627ZM14.714 16.1283C13.164 17.3699 11.1969 18.1125 9.05634 18.1125C4.05466 18.1125 0 14.0579 0 9.05627C0 4.05463 4.05466 0 9.05634 0C14.058 0 18.1127 4.05463 18.1127 9.05627C18.1127 11.1969 17.37 13.164 16.1283 14.7141L25.1317 23.7174C25.5222 24.108 25.5222 24.7411 25.1317 25.1317C24.7412 25.5222 24.108 25.5222 23.7175 25.1317L14.714 16.1283Z" fill="black" />
                            </svg>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex items-center gap-16">
                    <div className="flex gap-4">
                    <Button title="Account" />
                    <Button title="Logout" />

                        <button className="2xl:hidden xl:hidden lg:hidden p-2 bg-[#fff] rounded-md"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                        </button>
                    </div>

                </div>
            </header>
        </div>
    )
}

export default Header; 