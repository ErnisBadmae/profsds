import { ButtonRegistry } from '../../buttons/button-registry/button-registry';

import './header.scss';
import { Layout } from 'antd';

export const Header = () => {
    const { Content } = Layout;

    return (
        <Content style={{ padding: '0 20px' }}>
            <header className="header">
                <div className="header__logo pointer">
                    <a href="/standard-certifications/list">
                        <img className="logo" src='img/logo.png' alt="logo" />
                    </a>
                </div>
                <div className="header__title">
                    <div className="header__title_title">ПРОФСДС</div>
                </div>
                <div>
                    <ButtonRegistry
                        text="Реестр СДС"
                        path={'/standard-certifications/list'}
                    />
                    <ButtonRegistry
                        text="Реестр ОС"
                        path={'/organ-certifications/list'}
                    />
                    <ButtonRegistry
                        text="Реестр экспертов"
                        path={'organ-certification-experts/list'}
                    />
                    <ButtonRegistry
                        text="Реестр сертификатов"
                        path={'certificates/list'}
                    />
                </div>
            </header>
            <div className="header__line"></div>
        </Content>
    );
};
