import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonRegistry } from '../../../components/buttons/button-registry/button-registry';
import { getView } from '../../../store/entries/actions';

import './card-item.css';

function CardRegCertExp(props) {
    const { pathname } = useLocation();

    //     console.log(pathname, 'pathnamefromcardcurrent');
    //     const { id } = useParams();
    const dispatch = useDispatch();

    const { currentCard } = useSelector((state) => state.entries);

    const currentItem = currentCard?.reduce((acc, el, i) => {
        return {
            ...acc,
            ...el,
        };
    }, {});
    //     const currentItem = currentCard ?? Object.assign({}, currentCard);
    //     const currentItem = entries.find((el) => el.id_sds === id);
    useEffect(() => {
        dispatch(getView(pathname));
    }, [pathname, dispatch]);

    return (
        <div className="card">
            <div className="card__title">
                <strong>{currentItem?.expert_name}</strong>
            </div>

            <div className="card__body">
                <strong>№ аттестата</strong>
                <br />
                <p>{currentItem?.certificate_number}</p>

                <strong>Область специализации</strong>
                <br />
                <p>{currentItem?.area}</p>

                <strong>
                    <br />
                    Организация, представившая СДС на регистрацию (Оно же
                    Держатель)
                </strong>
                <p>{currentItem?.registration_company}</p>

                <strong>
                    <br />
                    Действителен до
                </strong>
                <br />
                <p>{currentItem?.valid}</p>

                <strong>
                    <br />
                    Дата вступление в организацию
                </strong>
                <br />
                <p>{currentItem?.introduction_date}</p>

                <strong>
                    <br />
                    Дата исключение из организации
                </strong>
                <br />
                <p>{currentItem?.exclusion_date}</p>

                <strong>
                    <br />
                    Должность при исключение
                </strong>
                <br />
                <p>{currentItem?.exclusion_position}</p>

                {/* <strong>
                    <br />
                    Статус
                </strong>
                <br />
                <p>{currentItem?.status || 'нет данных'}</p> */}
            </div>
            <div className="btn__card">
                <ButtonRegistry
                    text="Список членов СДС"
                    path={'/certificates/list'}
                />
                <ButtonRegistry
                    text="Сведения о компенсации"
                    path={'/certificates/list'}
                />
                <ButtonRegistry
                    text="Выгрузить реестр членов СДС"
                    path={'/certificates/list'}
                />
            </div>
        </div>
    );
}

export default CardRegCertExp;
