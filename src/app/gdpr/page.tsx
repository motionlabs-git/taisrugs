import DocumentsData from '@/data/DocumentsData'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Zásady ochrany osobních údajů',
}

const GDPR = () => {
    return (
        <div className='pageWrapper !pt-52 pb-10 sm:pb-16 min-h-screen bg-radial-[at_80%80%] from-zinc-950 to-zinc-900 to-75% text-white rounded-b-3xl'>
            <h1 className='!text-[10vw] md:!text-[8vw] font-bold font-archivo max-w-[66vw] relative pl-[0.06em] pb-[0.06em] pt-[0.03em] pr-[0.03em] sm:hover:pt-[0.06em] sm:hover:pl-[0.03em] sm:hover:pr-[0.06em] sm:hover:pb-[0.03em] duration-200'>
                <span className='absolute inset-0 translate-y-[0.8vw] text-primary'>
                    Ochrana osobních údaju
                </span>
                <span className='relative text-white'>
                    Ochrana osobních údaju
                </span>
            </h1>

            <div className='mt-10 md:mt-20 space-y-4 md:space-y-10'>
                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        1. Úvodní ustanovení
                    </h2>
                    <p>
                        Tyto zásady ochrany osobních údajů popisují, jakým
                        způsobem zpracovávám osobní údaje návštěvníků a klientů
                        prostřednictvím webových stránek{' '}
                        <strong>{DocumentsData.eshopDomain}</strong>. Jsem
                        správcem osobních údajů podle čl. 4 odst. 7 Nařízení
                        (EU) 2016/679 (GDPR).
                    </p>
                    <p className='mt-4'>
                        <strong>Správce osobních údajů:</strong> <br />
                        {DocumentsData.eshopName} <br />
                        {DocumentsData.seller} <br />
                        E-mail: {DocumentsData.email} <br />
                        Telefon: {DocumentsData.phone}
                    </p>
                </section>

                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        2. Jaké údaje zpracovávám
                    </h2>
                    <p>
                        Na webu jsou dostupné kontaktní a objednávkové
                        formuláře, ve kterých může uživatel dobrovolně vyplnit
                        své údaje:
                    </p>
                    <ul className='list-disc list-inside mt-4 space-y-1'>
                        <li>jméno a příjmení</li>
                        <li>e-mailová adresa</li>
                        <li>telefonní číslo</li>
                        <li>text zprávy / poptávky</li>
                    </ul>
                    <p className='mt-4'>
                        Tyto údaje jsou poskytovány dobrovolně a slouží výhradně
                        ke kontaktování uživatele za účelem vyřízení jeho dotazu
                        nebo poptávky.
                    </p>
                </section>

                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        3. Účel a právní základ zpracování
                    </h2>
                    <ol className='list-decimal list-inside space-y-3'>
                        <li>
                            <strong>Vyřízení poptávky nebo dotazu</strong> –
                            právním základem je čl. 6 odst. 1 písm. b) GDPR
                            (plnění smlouvy nebo jednání o jejím uzavření).
                        </li>
                        <li>
                            <strong>Odpověď e-mailem nebo telefonicky</strong> –
                            právním základem je oprávněný zájem správce
                            (komunikace se zákazníkem).
                        </li>
                        <li>
                            <strong>Evidence a ochrana práv správce</strong> –
                            právním základem je oprávněný zájem (uchování
                            komunikace pro případ právních nároků).
                        </li>
                    </ol>
                </section>

                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        4. Způsob zpracování a zabezpečení
                    </h2>
                    <p>
                        Zpracování osobních údajů probíhá elektronicky v souladu
                        s GDPR. Pro odesílání a správu formulářů využívám službu{' '}
                        <strong>EmailJS (https://www.emailjs.com)</strong>,
                        která zprostředkovává bezpečné odesílání e-mailů z
                        webového formuláře.
                    </p>
                    <p className='mt-4'>
                        EmailJS funguje jako{' '}
                        <strong>zpracovatel osobních údajů</strong> podle GDPR a
                        zajišťuje jejich přenos výhradně do zabezpečených
                        datových center v EU nebo v souladu s evropskými
                        standardy ochrany dat.
                    </p>
                    <p className='mt-4'>
                        Veškerá komunikace mezi vaším prohlížečem a serverem je
                        šifrována (HTTPS).
                    </p>
                </section>

                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        5. Doba uchování údajů
                    </h2>
                    <p>Osobní údaje uchovávám pouze po nezbytnou dobu:</p>
                    <ul className='list-disc list-inside mt-4 space-y-1'>
                        <li>
                            pro vyřízení dotazu nebo poptávky – maximálně po
                            dobu 12 měsíců od poslední komunikace,
                        </li>
                        <li>
                            v případě uzavření smlouvy po dobu dle zákonných
                            povinností (např. účetní evidence).
                        </li>
                    </ul>
                </section>

                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        6. Předávání osobních údajů
                    </h2>
                    <p>
                        Osobní údaje nejsou předávány žádným dalším třetím
                        osobám, s výjimkou:
                    </p>
                    <ul className='list-disc list-inside mt-4 space-y-1'>
                        <li>
                            EmailJS (technický zpracovatel – odesílání e-mailů),
                        </li>
                        <li>
                            poskytovatelů hostingu nebo analytických služeb,
                            kteří zpracovávají data na základě smlouvy o
                            zpracování osobních údajů.
                        </li>
                    </ul>
                    <p className='mt-4'>
                        Osobní údaje nejsou předávány mimo Evropskou unii.
                    </p>
                </section>

                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        7. Práva subjektu údajů
                    </h2>
                    <p>Podle GDPR máš jako subjekt údajů následující práva:</p>
                    <ul className='list-disc list-inside mt-4 space-y-1'>
                        <li>právo na přístup k osobním údajům,</li>
                        <li>právo na opravu nebo doplnění údajů,</li>
                        <li>právo na výmaz („být zapomenut“),</li>
                        <li>právo na omezení zpracování,</li>
                        <li>právo vznést námitku,</li>
                        <li>právo na přenositelnost údajů,</li>
                        <li>
                            právo podat stížnost u Úřadu pro ochranu osobních
                            údajů (www.uoou.cz).
                        </li>
                    </ul>
                    <p className='mt-4'>
                        Pokud chceš uplatnit svá práva, napiš na e-mail:{' '}
                        <strong>{DocumentsData.email}</strong>
                    </p>
                </section>

                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        8. Závěrečná ustanovení
                    </h2>
                    <p>
                        Tyto zásady mohou být aktualizovány, např. při změně
                        právních předpisů nebo používaných služeb. Aktuální
                        verze zásad je vždy dostupná na této stránce.
                    </p>
                    <p className='mt-4'>
                        <strong>
                            Tyto zásady jsou platné od {DocumentsData.email}.
                        </strong>
                    </p>
                </section>
            </div>
        </div>
    )
}

export default GDPR
