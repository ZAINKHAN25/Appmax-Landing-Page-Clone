import { FaAngleDown } from "react-icons/fa";
import navbarDropDowns from "../Navbar/Navbar-Dropdown";

function NavbarDropDownComponent() {

    function openDropDown(i) {
        console.log(i);
    }


    return (
        <ul className='navbar-drop-down'>

            {
                navbarDropDowns.map((x, i) => {
                    return (
                        <li className='li-of-Navbar-DropDown' key={i}>
                            <div onMouseOver={(index) => openDropDown(i + 1)}>
                                {
                                    x.dropDownName
                                }
                                <FaAngleDown />
                            </div>
                            <div className="subDropDownDiv position-absolute">

                                {
                                    x.dropDowns.map((singleDropDown, subIndex) => {
                                        return (
                                            <div id={`singleDivOfDropDown${subIndex}`}>
                                                {
                                                    singleDropDown
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </li>
                    )
                })
            }

        </ul>
    )
};

export default NavbarDropDownComponent;