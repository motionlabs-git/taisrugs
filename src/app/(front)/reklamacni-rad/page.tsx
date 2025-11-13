import DocumentsData from '@/app/(front)/data/DocumentsData'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import { FiDownload } from 'react-icons/fi'

export const metadata: Metadata = {
    title: 'Work in Progress',
    robots: {
        follow: false,
        index: false,
    },
}

const ReturnsPolicy = () => {
    return (
        <div className='pageWrapper !pt-52 pb-16 min-h-screen bg-radial-[at_80%80%] from-zinc-950 to-zinc-900 to-75% text-white rounded-b-3xl'>
            <h1 className='!text-[14vw] md:!text-[12vw] font-bold font-archivo max-w-[66vw] relative pl-[0.06em] pb-[0.06em] pt-[0.03em] pr-[0.03em] sm:hover:pt-[0.06em] sm:hover:pl-[0.03em] sm:hover:pr-[0.06em] sm:hover:pb-[0.03em] duration-200'>
                <span className='absolute inset-0 translate-y-[0.8vw] text-primary'>
                    Reklamacní rád
                </span>
                <span className='relative text-white'>Reklamacní rád</span>
            </h1>

            <div className='mt-10 md:mt-20 space-y-4 md:space-y-10'>
                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        1. Úvodní ustanovení
                    </h2>
                    <p>
                        Tento reklamační řád stanovuje postup při uplatňování
                        práv z vadného plnění (reklamací) a při odstoupení od
                        smlouvy uzavřené mezi kupujícím a prodávajícím
                        prostřednictvím internetového obchodu{' '}
                        <strong>{DocumentsData.eshopDomain}</strong>.
                    </p>
                    <p className='mt-4'>
                        Prodávajícím je{' '}
                        <strong>[doplň obchodní jméno / IČO / sídlo]</strong>{' '}
                        (dále jen „prodávající“). Tento dokument je nedílnou
                        součástí obchodních podmínek a je v souladu se zákonem
                        č. 89/2012 Sb., občanský zákoník, a zákonem č. 634/1992
                        Sb., o ochraně spotřebitele.
                    </p>
                </section>

                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        2. Odpovědnost za vady a záruka
                    </h2>
                    <p>
                        Prodávající odpovídá kupujícímu, že prodávaná věc při
                        převzetí nemá vady a že v době převzetí má vlastnosti,
                        které si strany ujednaly. Pokud nebyly ujednány, má věc
                        takové vlastnosti, které prodávající nebo výrobce popsal
                        nebo které kupující očekával vzhledem k povaze zboží.
                    </p>
                    <p className='mt-4'>
                        Na zboží se vztahuje zákonná záruční doba 24 měsíců od
                        převzetí. Záruka se nevztahuje na opotřebení způsobené
                        běžným užíváním, mechanické poškození, ani na vady
                        vzniklé nesprávným používáním či neodborným zásahem.
                    </p>
                </section>

                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        3. Uplatnění reklamace
                    </h2>
                    <p>
                        Kupující je povinen reklamaci uplatnit bez zbytečného
                        odkladu po zjištění vady. Reklamace se podává e-mailem
                        na adresu <strong>{DocumentsData.email}</strong> nebo
                        písemně zasláním reklamovaného zboží na adresu:
                    </p>
                    <p className='mt-4'>
                        <strong>{DocumentsData.storeAddress}</strong>
                    </p>
                    <p className='mt-4'>
                        V oznámení o reklamaci kupující uvede své jméno, adresu,
                        popis vady a způsob, jakým požaduje reklamaci vyřídit.
                        Doporučujeme přiložit kopii dokladu o koupi (fakturu
                        nebo účtenku).
                    </p>
                </section>

                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        4. Vyřízení reklamace
                    </h2>
                    <p>
                        Prodávající potvrdí přijetí reklamace e-mailem a
                        informuje kupujícího o dalším postupu. Reklamace bude
                        vyřízena nejpozději do 30 dnů od jejího uplatnění, pokud
                        se prodávající s kupujícím nedohodne jinak.
                    </p>
                    <p className='mt-4'>
                        V případě uznání reklamace má kupující právo na
                        bezplatné odstranění vady, výměnu zboží, přiměřenou
                        slevu z ceny nebo odstoupení od smlouvy.
                    </p>
                </section>

                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        5. Náklady na reklamaci
                    </h2>
                    <p>
                        Náklady spojené s dopravou reklamovaného zboží hradí
                        kupující. V případě oprávněné reklamace prodávající
                        uhradí účelně vynaložené náklady na dopravu zpět
                        kupujícímu.
                    </p>
                    <p className='mt-4'>
                        Pokud bude reklamace neoprávněná, hradí náklady na
                        přepravu kupující.
                    </p>
                </section>

                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        6. Odstoupení od smlouvy
                    </h2>
                    <p>
                        Kupující – spotřebitel má právo odstoupit od smlouvy do
                        14 dnů od převzetí zboží bez udání důvodu. O svém
                        odstoupení informuje prodávajícího e-mailem na{' '}
                        <strong>{DocumentsData.email}</strong> nebo písemně na
                        adresu <strong>{DocumentsData.storeAddress}</strong>.
                    </p>
                    <p className='mt-4'>
                        Zboží musí být zasláno zpět nepoškozené, kompletní,
                        nejlépe v původním obalu. Náklady na vrácení nese
                        kupující. Po obdržení zboží bude kupujícímu vrácena
                        částka odpovídající kupní ceně zboží, nejpozději do 14
                        dnů.
                    </p>
                </section>

                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        7. Vzorový formulář pro odstoupení od smlouvy
                    </h2>
                    <p>
                        Tento formulář můžete vytisknout, vyplnit a zaslat
                        společně s vráceným zbožím nebo e-mailem jako přílohu.
                    </p>

                    <div className='relative mt-6 bg-zinc-800 border border-zinc-600/30 rounded-xl p-6 space-y-4 text-sm leading-relaxed'>
                        <Link
                            href='/documents/'
                            download={'Odstoupeni_Od_Smlouvy.pdf'}
                            className='absolute top-4 right-4 flex items-center gap-2 cursor-pointer'
                        >
                            <span>Stáhnout</span> <FiDownload></FiDownload>
                        </Link>

                        <p>
                            <strong>
                                Formulář pro odstoupení od kupní smlouvy
                            </strong>
                        </p>

                        <p>
                            Adresát: <br />
                            <strong>{DocumentsData.eshopName}</strong> <br />
                            <strong>{DocumentsData.storeAddress}</strong> <br />
                            <strong>E-mail:</strong> {DocumentsData.email}
                        </p>

                        <p>
                            Oznamuji, že tímto odstupuji od kupní smlouvy
                            uzavřené dne <strong>______</strong> a týkající se
                            zboží:
                        </p>

                        <p>
                            <strong>Název zboží:</strong>{' '}
                            ___________________________
                        </p>
                        <p>
                            <strong>Číslo objednávky:</strong>{' '}
                            _____________________
                        </p>
                        <p>
                            <strong>Datum převzetí zboží:</strong>{' '}
                            _________________
                        </p>

                        <p>
                            Jméno a příjmení kupujícího:
                            ________________________
                        </p>
                        <p>
                            Adresa kupujícího: _________________________________
                        </p>
                        <p>
                            E-mail / Telefon: _________________________________
                        </p>

                        <p>Datum: _____________________</p>
                        <p>
                            Podpis (pouze při zaslání v listinné podobě):
                            _____________________
                        </p>
                    </div>
                </section>

                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        8. Závěrečná ustanovení
                    </h2>
                    <p>
                        Tento reklamační řád nabývá účinnosti dne{' '}
                        <strong>{DocumentsData.validDate}</strong> a je platný
                        až do jeho nahrazení novým zněním. Aktuální verze je
                        vždy k dispozici na webových stránkách e-shopu.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default ReturnsPolicy
