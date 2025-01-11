import { createContext } from 'react';

type SvgAssetsContextType = {
    updateId: number;
    update: () => void;
};

const initialValues: SvgAssetsContextType = {
    updateId: 0,
    update: () => {},
};

const SvgAssetsContext = createContext(initialValues);

export default SvgAssetsContext;
