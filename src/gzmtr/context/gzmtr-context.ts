import { createContext } from 'react';

type GZMTRContextType = {
    updateId: number;
    update: () => void;
};

const initialValues: GZMTRContextType = {
    updateId: 0,
    update: () => {},
};

const GZMTRContext = createContext(initialValues);

export default GZMTRContext;
