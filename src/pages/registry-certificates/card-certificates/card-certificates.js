import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonRegistry } from '../../../components/buttons/button-registry/button-registry';
import { getView } from '../../../store/entries/actions';

import './card-item.css';

function CardSertificate(props) {
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
                <strong>{currentItem?.company_name}</strong>
            </div>

            <div className="card__body">
                <strong>№ выданного сертификата</strong>
                <br />
                <p>{currentItem?.number}</p>
                <br />

                <strong>ИНН получателя</strong>
                <br />
                <p>{currentItem?.company_inn}</p>

                <strong>
                    <br />№ бланка
                </strong>
                <p>{currentItem?.certificate_form}</p>

                <strong>
                    <br />
                    Дата выдачи
                </strong>
                <br />
                <p>{currentItem?.certificate_date}</p>

                <strong>
                    <br />
                    Соответствие требованиям (например, стандарт)
                </strong>
                <br />
                <p>{currentItem?.certificate_conformity}</p>

                <strong>
                    <br />
                    ОГРН получателя
                </strong>
                <br />
                <p>{currentItem?.company_ogrn}</p>

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

export default CardSertificate;
