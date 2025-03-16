import SideBar from '@/Components/adminComponents/SideBar';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <div className='flex'>
                <SideBar />
            </div>
            <div> {children}</div>
        </>
    )
};

export default Layout;