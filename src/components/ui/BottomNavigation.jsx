import home from '@assets/icons/home.svg'
import list from '@assets/icons/list.svg'
import blocks from "@assets/icons/blocks.svg"
import {NavLink} from "react-router-dom";

const BottomNavigation = () => {
    return (
        <div data-theme={'black'}
             className={'fixed bottom-0 w-full flex justify-evenly items-center p-2'}>

            <NavLink to={'/'}
                     className={({isActive}) =>
                         `p-2 rounded-xl transition-colors duration-300 ease-in-out 
                         ${isActive ? "bg-[#999999]/40" : ""}`
                     }
            >

                <img
                    src={home}
                    alt={'home'}
                    className={'w-8 h-8'}
                />
            </NavLink>

            <div className={'w-1 h-8 bg-[#999999] rounded-xl'}></div>

            <NavLink to={'/task'}
                     className={({isActive}) =>
                         `p-2 rounded-xl transition-colors duration-300 ease-in-out
                         ${isActive ? "bg-[#999999]/40" : ""}`
                     }
            >
                <img
                    src={list}
                    alt={'list'}
                    className={'w8 h-8'}
                />
            </NavLink>

            <div className={'w-1 h-8 bg-[#999999] rounded-xl'}></div>

            <NavLink to={'/withdraw'}
                     className={({isActive}) =>
                         `p-2 rounded-xl transition-colors duration-300 ease-in-out 
                         ${isActive ? "bg-[#999999]/40" : ""}`
                     }
            >
                <img
                    src={blocks}
                    alt={'blocks'}
                    className={'w-8 h-8'}
                />
            </NavLink>

        </div>
    );
};

export default BottomNavigation;