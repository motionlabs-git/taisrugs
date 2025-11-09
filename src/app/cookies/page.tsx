import React from 'react'

const Cookies = () => {
    return (
        <div className='pageWrapper !pt-52 pb-10 sm:pb-16 min-h-screen bg-radial-[at_80%80%] from-zinc-950 to-zinc-900 to-75% text-white rounded-b-3xl'>
            <h1 className='!text-[10vw] md:!text-[8vw] font-bold font-archivo max-w-[66vw] relative pl-[0.06em] pb-[0.06em] pt-[0.03em] pr-[0.03em] sm:hover:pt-[0.06em] sm:hover:pl-[0.03em] sm:hover:pr-[0.06em] sm:hover:pb-[0.03em] duration-200'>
                <span className='absolute inset-0 translate-y-[0.8vw] text-primary'>
                    Cookies
                </span>
                <span className='relative text-white'>Cookies</span>
            </h1>

            <div className='mt-10 md:mt-20 space-y-4 md:space-y-10'>
                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        1. Co jsou soubory cookies
                    </h2>
                    <p>
                        Soubory cookies jsou malé textové soubory, které se
                        ukládají do vašeho zařízení (počítač, mobilní telefon,
                        tablet) při návštěvě webových stránek. Umožňují rozlišit
                        jednotlivé návštěvníky webu, zlepšují funkčnost stránky
                        a pomáhají nám analyzovat chování uživatelů.
                    </p>
                </section>

                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        2. Proč cookies používáme
                    </h2>
                    <p>Cookies používáme za účelem:</p>
                    <ul className='list-disc list-inside mt-4 space-y-2'>
                        <li>
                            zajištění základní funkčnosti webu (např. uložení
                            položek v košíku),
                        </li>
                        <li>zapamatování uživatelských voleb a nastavení,</li>
                        <li>
                            měření návštěvnosti a zlepšování obsahu webu
                            (analytika),
                        </li>
                        <li>
                            poskytování cíleného marketingu (pokud s ním
                            uživatel souhlasil).
                        </li>
                    </ul>
                </section>

                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10 overflow-x-auto'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        3. Přehled používaných cookies
                    </h2>
                    <p className='mb-4'>
                        Níže uvedená tabulka obsahuje přehled nejčastěji
                        používaných cookies na našem webu. Uprav tento seznam
                        dle konkrétních integrací, které máš aktivní (Shopify,
                        EmailJS, analytika apod.).
                    </p>

                    <table className='min-w-full text-left border-collapse'>
                        <thead>
                            <tr className='text-sm text-zinc-300/90'>
                                <th className='py-2 pr-4'>Název cookie</th>
                                <th className='py-2 pr-4'>Poskytovatel</th>
                                <th className='py-2 pr-4'>Účel</th>
                                <th className='py-2 pr-4'>Doba uložení</th>
                                <th className='py-2 pr-4'>Právní základ</th>
                            </tr>
                        </thead>
                        <tbody className='text-sm text-zinc-200/90'>
                            <tr className='border-t border-zinc-700'>
                                <td className='py-3 pr-4'>emailjs_user</td>
                                <td className='py-3 pr-4'>EmailJS</td>
                                <td className='py-3 pr-4'>
                                    Technická – zajištění odeslání formuláře
                                </td>
                                <td className='py-3 pr-4'>1 rok</td>
                                <td className='py-3 pr-4'>
                                    Oprávněný zájem / plnění služby
                                </td>
                            </tr>

                            <tr className='border-t border-zinc-700'>
                                <td className='py-3 pr-4'>_shopify_y</td>
                                <td className='py-3 pr-4'>Shopify</td>
                                <td className='py-3 pr-4'>
                                    Funkční – udržení košíku a relace uživatele
                                </td>
                                <td className='py-3 pr-4'>do 14 dní</td>
                                <td className='py-3 pr-4'>Plnění smlouvy</td>
                            </tr>

                            <tr className='border-t border-zinc-700'>
                                <td className='py-3 pr-4'>_shopify_s</td>
                                <td className='py-3 pr-4'>Shopify</td>
                                <td className='py-3 pr-4'>
                                    Funkční – dokončení checkoutu
                                </td>
                                <td className='py-3 pr-4'>do 14 dní</td>
                                <td className='py-3 pr-4'>Plnění smlouvy</td>
                            </tr>

                            <tr className='border-t border-zinc-700'>
                                <td className='py-3 pr-4'>
                                    _shopify_analytics
                                </td>
                                <td className='py-3 pr-4'>Shopify</td>
                                <td className='py-3 pr-4'>
                                    Analytická – měření návštěvnosti (pokud
                                    udělen souhlas)
                                </td>
                                <td className='py-3 pr-4'>1 rok</td>
                                <td className='py-3 pr-4'>Souhlas uživatele</td>
                            </tr>

                            <tr className='border-t border-zinc-700'>
                                <td className='py-3 pr-4'>
                                    consent_preferences / consent_status
                                </td>
                                <td className='py-3 pr-4'>Vlastní web</td>
                                <td className='py-3 pr-4'>
                                    Uložení voleb uživatele ohledně cookies
                                </td>
                                <td className='py-3 pr-4'>1 rok</td>
                                <td className='py-3 pr-4'>Souhlas uživatele</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className='mt-4 text-sm text-zinc-400'>
                        Poznámka: konkrétní názvy cookies a doby uložení závisí
                        na zapnutých aplikacích a konfiguraci. Doporučujeme při
                        publikaci zkontrolovat aktuálně nastavované cookies přes
                        DevTools → Application → Cookies.
                    </p>
                </section>

                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        4. Jak cookies spravovat
                    </h2>
                    <p>
                        Při první návštěvě se vám zobrazí banner pro udělení
                        souhlasu s nastavením cookies. Odkazy pro správu cookies
                        jsou dostupné v patičce webu.
                    </p>
                    <p className='mt-4'>
                        Technické cookies nezbytné pro fungování webu nelze
                        vypnout bez omezení funkčnosti. Ostatní cookies
                        (analytické, marketingové) lze zablokovat nebo odvolat
                        souhlas:
                    </p>
                    <ul className='list-disc list-inside mt-4 space-y-2'>
                        <li>přes nastavení cookie banneru na webu,</li>
                        <li>
                            přes nastavení prohlížeče (blokování cookies nebo
                            smazání uložených cookies),
                        </li>
                        <li>
                            přes nástroje třetích stran (např. Cookiebot,
                            Consent Manager) – pokud je používáš.
                        </li>
                    </ul>
                </section>

                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        5. Dopady odmítnutí cookies
                    </h2>
                    <p>
                        Pokud odmítnete použití některých cookies, může to
                        omezit funkčnost webu – např. položky v košíku se nemusí
                        ukládat, nemusí fungovat personalizace nebo analytika
                        nebude sbírat data.
                    </p>
                </section>

                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'>
                    <h2 className='text-2xl font-semibold mb-4'>
                        6. Změny zásad
                    </h2>
                    <p>
                        Tyto zásady používání cookies mohou být občas
                        aktualizovány (např. při změně poskytovatelů služeb či
                        právních požadavků). Aktuální verze je vždy zveřejněna
                        na této stránce.
                    </p>
                    <p className='mt-4'>
                        Pokud bude zásadní změna, budeme vás o ní informovat
                        (např. emailem nebo výraznou notifikací na webu).
                    </p>
                </section>
            </div>
        </div>
    )
}

export default Cookies
