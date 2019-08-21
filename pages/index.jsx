import '../src/style.css'
import Icon from '@mdi/react';
import { mdiPhone, mdiEmailEditOutline, mdiEmailOutline, mdiCellphoneIphone, mdiChevronDown } from '@mdi/js';

const Typograf = require('typograf');
const tp = new Typograf({locale: ['ru', 'en-US']});

console.log(tp.execute(' Мир - мой мир!!   '));

function ResponsiveIcon(props) {
    return (
        <div
            style={{
                marginRight: 10,
                width: 100,
                // height: 0,
                position: 'relative',
            }}
        >
            <div
                style={{
                    paddingBottom: '100%',
                    backgroundColor: props.backgroundColor,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Icon path={props.path} color={props.color} size={props.size} />
                </div>
            </div>
        </div>
    )
}

function Home() {
    return (
        <>
            <div className={'welcome'}>
                <h1
                >
                   {tp.execute('Купля-продажа готового бизнеса, франшиз и недвижемости. Консалтинг, коучинг')}</h1>
                <div className={'logo'}>
                    <div>
                        <ResponsiveIcon path={mdiPhone} backgroundColor={'rgb(243, 165, 158)'} color="#424343" size={2} />
                        <ResponsiveIcon path={mdiEmailOutline} backgroundColor={'rgb(243, 165, 158)'} color="#424343" size={2} />
                        <ResponsiveIcon path={mdiCellphoneIphone} backgroundColor={'rgb(243, 165, 158)'} color="#424343" size={2} />
                        <ResponsiveIcon path={mdiEmailEditOutline} backgroundColor={'rgb(243, 165, 158)'} color="#424343" size={2} />
                    </div>
                    <img src={'/static/svg/bm_logo.svg'}></img>
                </div>
                <div
                style={{
                    display: 'flex',
                    paddingTop: '2%',
                    justifyContent: 'center',
                }}>
                    <Icon path={mdiChevronDown} color="rgb(243, 165, 158)" size={2} />
                </div>
            </div>
            <div className={'pref'}>
                <h2>GHGKHJK</h2>
                <p display>
                {tp.execute('Повседневная практика показывает, что рамки и место обучения кадров требуют определения и уточнения направлений прогрессивного развития. Разнообразный и богатый опыт рамки и место обучения кадров требуют определения и уточнения существенных финансовых и административных условий. Таким образом новая модель организационной деятельности позволяет оценить значение существенных финансовых и административных условий.')}
                </p>
            </div>
        </>
    )
}

export default Home