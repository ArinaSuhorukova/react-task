import React, {useState} from 'react';
import {Button} from 'reactstrap';
import {iconList} from '../data/constants';

const IconMenu = ({iconId, onIconChanged}) => {

    const [isMenuShown, setMenuShown] = useState(false);

    const handleOpenMenu = () => {
        setMenuShown(!isMenuShown);
    };

    const handleChangeCurrentIcon = (index) => {
        onIconChanged(index);
        handleOpenMenu(false);
    };

    return (
        <div>
            <Button className='ProductPanelElement' onClick={handleOpenMenu}>{iconList[iconId]}</Button>

            {isMenuShown &&
            <div className='ProductPanelElement IconMenu'>
                {
                    iconList.filter(el => el !== iconList[iconId]).map((el, index) => {
                        const iconIndex = iconList.findIndex(icon => icon === el);
                        return (
                            <Button className='IconItem' key={iconIndex}
                                    onClick={() => handleChangeCurrentIcon(iconIndex)}>{el}</Button>
                        )
                    })
                }
            </div>
            }
        </div>
    );
};

export default IconMenu;