import GZMTRContext from './gzmtr-context';
import { PropsWithChildren, useState } from 'react';

export default function GZMTRContextProvider({ children }: PropsWithChildren) {
    const [updateId, setUpdateId] = useState(Math.random());
    return (
        <GZMTRContext.Provider value={{ updateId, update: () => setUpdateId(Math.random()) }}>
            {children}
        </GZMTRContext.Provider>
    );
}
