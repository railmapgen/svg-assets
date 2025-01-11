import SvgAssetsContext from './svg-assets-context';
import { PropsWithChildren, useState } from 'react';

export default function SvgAssetsContextProvider({ children }: PropsWithChildren) {
    const [updateId, setUpdateId] = useState(Math.random());
    return (
        <SvgAssetsContext.Provider value={{ updateId, update: () => setUpdateId(Math.random()) }}>
            {children}
        </SvgAssetsContext.Provider>
    );
}
