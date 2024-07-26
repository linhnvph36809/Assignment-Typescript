import { createContext, ReactNode, useContext, useState } from 'react';
import Loading from '../components/Loading';

type TypeContext = {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Context = createContext<TypeContext>({ setLoading: () => {} });

export const useGlobalContext = () => useContext(Context);

const GlobalContext = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState<boolean>(false);
    return (
        <>
            <Context.Provider value={{ setLoading }}>
                {children}
            </Context.Provider>
            {<Loading isShow={loading} />}
        </>
    );
};

export default GlobalContext;
