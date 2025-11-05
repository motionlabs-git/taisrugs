import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Zásady ochrany osobních údajů',
}

const TermsAndConditions = () => {
    return (
        <div className='pageWrapper !pt-52 pb-16 min-h-screen bg-radial-[at_80%80%] from-zinc-950 to-zinc-900 to-75% text-white rounded-b-3xl'>
            <h1 className='!text-[14vw] md:!text-[12vw] font-bold font-archivo max-w-[66vw] relative pl-[0.06em] pb-[0.06em] pt-[0.03em] pr-[0.03em] sm:hover:pt-[0.06em] sm:hover:pl-[0.03em] sm:hover:pr-[0.06em] sm:hover:pb-[0.03em] duration-200'>
                <span className='absolute inset-0 translate-y-[0.8vw] text-primary'>
                    Obchodní podmínky
                </span>
                <span className='relative text-white'>Obchodní podmínky</span>
            </h1>

            <div className='mt-10 md:mt-20 space-y-4 md:space-y-10'>
                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        1. Úvodní ustanovení
                    </h2>
                    <p>
                        Tyto obchodní podmínky upravují práva a povinnosti mezi
                        prodávajícím a kupujícím při uzavírání kupních smluv
                        prostřednictvím internetového obchodu{' '}
                        <strong>[doplň název / doménu e-shopu]</strong>, který
                        provozuje{' '}
                        <strong>[doplň obchodní jméno / IČO / sídlo]</strong>.
                    </p>
                    <p className='mt-4'>
                        Tyto obchodní podmínky jsou nedílnou součástí kupní
                        smlouvy uzavřené mezi prodávajícím a kupujícím. Kupující
                        odesláním objednávky potvrzuje, že se s nimi seznámil a
                        souhlasí s nimi.
                    </p>
                </section>

                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        2. Uzavření kupní smlouvy
                    </h2>
                    <p>
                        Webový obchod využívá platformu Shopify, která zajišťuje
                        technické řešení objednávkového procesu. Kupní smlouva
                        vzniká okamžikem, kdy kupující odešle objednávku a tato
                        objednávka je následně potvrzena prodávajícím
                        prostřednictvím e-mailu.
                    </p>
                    <p className='mt-4'>
                        Kupující je povinen při objednávce uvést správné a
                        pravdivé údaje. Prodávající nenese odpovědnost za
                        následky plynoucí z uvedení nepravdivých nebo neúplných
                        informací.
                    </p>
                </section>

                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        3. Cena a platební podmínky
                    </h2>
                    <p>
                        Ceny uvedené v internetovém obchodě jsou konečné, včetně
                        všech daní a poplatků. Prodávající si vyhrazuje právo
                        měnit ceny zboží, přičemž změna se nedotýká již
                        uzavřených smluv.
                    </p>
                    <p className='mt-4'>
                        Kupující může cenu zboží uhradit následujícími způsoby:
                    </p>
                    <ul className='list-disc list-inside mt-2 space-y-1'>
                        <li>
                            platební kartou online prostřednictvím zabezpečené
                            brány Shopify Payments,
                        </li>
                        <li>na dobírku při doručení zásilky dopravcem,</li>
                        <li>
                            v hotovosti při osobním odběru (pokud je tato
                            možnost nabízena).
                        </li>
                    </ul>
                    <p className='mt-4'>
                        Faktura je vystavena elektronicky a zaslána na
                        e-mailovou adresu kupujícího.
                    </p>
                </section>

                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        4. Doprava a dodací podmínky
                    </h2>
                    <p>
                        Prodávající zajišťuje dopravu zboží prostřednictvím
                        služby <strong>Zásilkovna</strong> a případně dalších
                        dopravců dle aktuální nabídky.
                    </p>
                    <p className='mt-4'>
                        Dodací lhůta se obvykle pohybuje mezi 2–5 pracovními dny
                        od potvrzení objednávky. O odeslání zásilky je kupující
                        informován e-mailem.
                    </p>
                    <p className='mt-4'>
                        V případě poškození zásilky během přepravy je nutné
                        uplatnit reklamaci bezodkladně u dopravce a informovat
                        prodávajícího.
                    </p>
                </section>

                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        5. Odstoupení od smlouvy
                    </h2>
                    <p>
                        Kupující – spotřebitel má právo odstoupit od smlouvy do
                        14 dnů od převzetí zboží bez udání důvodu. Pro
                        odstoupení může využít vzorový formulář zaslaný e-mailem
                        nebo vlastní písemné oznámení.
                    </p>
                    <p className='mt-4'>
                        Zboží musí být vráceno nepoškozené, kompletní a nejlépe
                        v původním obalu. Náklady na vrácení zboží nese
                        kupující.
                    </p>
                    <p className='mt-4'>
                        Po doručení vráceného zboží bude kupní cena vrácena bez
                        zbytečného odkladu, nejpozději do 14 dnů.
                    </p>
                </section>

                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        6. Reklamační řád
                    </h2>
                    <p>
                        V případě, že se u zboží projeví vada, má kupující právo
                        uplatnit reklamaci do 24 měsíců od převzetí. Reklamace
                        se uplatňuje písemně na e-mail{' '}
                        <strong>[doplň e-mail]</strong> nebo zasláním zboží na
                        adresu <strong>[doplň adresu]</strong>.
                    </p>
                    <p className='mt-4'>
                        Reklamace bude vyřízena bez zbytečného odkladu,
                        nejpozději do 30 dnů ode dne jejího uplatnění. O
                        výsledku bude kupující informován e-mailem.
                    </p>
                </section>

                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        7. Ochrana osobních údajů
                    </h2>
                    <p>
                        Prodávající zpracovává osobní údaje v souladu s
                        nařízením GDPR a zákonem č. 110/2019 Sb. o zpracování
                        osobních údajů. Údaje zadané do kontaktních a
                        objednávkových formulářů (např. jméno, e-mail, telefon,
                        text zprávy) jsou využívány pouze pro vyřízení
                        objednávky či odpověď na dotaz.
                    </p>
                    <p className='mt-4'>
                        Zpracování probíhá prostřednictvím služby{' '}
                        <strong>EmailJS</strong> a platformy Shopify, které
                        působí jako zpracovatelé dat. Další informace jsou
                        uvedeny v samostatném dokumentu{' '}
                        <strong>Zásady ochrany osobních údajů (GDPR)</strong>.
                    </p>
                </section>

                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        8. Závěrečná ustanovení
                    </h2>
                    <p>
                        Tyto obchodní podmínky jsou platné od{' '}
                        <strong>[doplň datum]</strong> a mohou být aktualizovány
                        bez předchozího upozornění. Aktuální znění je vždy
                        zveřejněno na webových stránkách e-shopu.
                    </p>
                    <p className='mt-4'>
                        Právní vztahy mezi prodávajícím a kupujícím se řídí
                        právním řádem České republiky.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default TermsAndConditions
