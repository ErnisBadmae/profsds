import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonRegistry } from '../../../components/buttons/button-registry/button-registry';
import { getView } from '../../../store/entries/actions';
// import { certifacatesTableColumn } from '../../../helpers/currentTableConstants';
import './card-item.css';

function CardItem(props) {
    const { pathname } = useLocation();

    console.log(pathname, 'pathnamefromcardcurrent');
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

    //     const handleColumns2 = function () {
    //    switch (pathname) {
    //   case '/organ_certifications/list':
    //       return organCertificationTableColumn;

    //   case '/organ-certification-experts/list':
    //       return expertsListTableColumn;

    //   case '/certificate/view/:id':
    //       return (

    //       );
    //   default:
    console.log(12312312312);
    return (
        <div className="card">
            <div className="card__title">
                <strong>{currentItem?.full_name}</strong>
            </div>
            <div className="card__body">
                <strong>Полное наименование СДС</strong>
                <br />
                <p>{currentItem?.expert_name}</p>
                <strong>
                    <br />
                    Регистрационный номер СДС
                </strong>
                <br />
                <p>{currentItem?.manager_name}</p>
                <strong>
                    <br />
                    Дата регистрации (оно же Дата регистрации в реестре
                    Росстандарта)
                </strong>
                <br />
                <p>{currentItem?.reg_date}</p>
                <strong>
                    <br />
                    Организация, представившая СДС на регистрацию (Оно же
                    Держатель)
                </strong>
                <br />
                <p>{currentItem?.reg_comp}</p>
                <strong>
                    <br />
                    Сайт:
                </strong>
                <br />
                <p>{currentItem?.site}</p>
                <strong>
                    <br />
                    Область распространения системы (объекты сертификации)
                </strong>
                <br />
                <p>{currentItem?.reg_date}</p>
                <strong>
                    <br />
                    Изображение знака
                </strong>
                <br />
                <p>{currentItem?.reg_date}</p>
                <strong>
                    <br />
                    Статус
                </strong>
                <br />
                <p>{currentItem?.status || 'нет данных'}</p>
            </div>
            <div className="btn__card">
                <ButtonRegistry text="Список членов СДС" path={'/spisok2'} />
                <ButtonRegistry
                    text="Сведения о компенсации"
                    path={'/spisok3'}
                />
                <ButtonRegistry
                    text="Выгрузить реестр членов СДС"
                    path={'/spisok3'}
                />
            </div>
        </div>
    );

    //     };

    //     return { handleColumns2 };
}

export default CardItem;
