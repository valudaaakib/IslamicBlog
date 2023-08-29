import React from 'react';
import '../../assets/css/pages/Home.css';

const PrayerTime = () => {
    return (
        <>
            <div className='flex flex-wrap'>
                <div className='salah-right-section'>
                    <h2 className='text-white text-4xl pt-20 text-center'>PRAYER TIMES</h2>
                    <p className='text-center pt-5 text- font-bold text-base hover:text-white'>Prayer times in Jakarta</p>
                    <p className='text-center text-white pt-3'>Tue 29 Aug</p>
                    <table className='mx-auto'>
                        <tbody>
                            <tr className='salah-table'>
                                <td className='prayer-salah-names'>
                                    Fajar
                                </td>
                                <td className='prayer-salah-times'>
                                    04:38 AM
                                </td>
                            </tr>
                            <tr className='salah-table'>
                                <td className='prayer-salah-names'>
                                    Fajar
                                </td>
                                <td className='prayer-salah-times'>
                                    04:38 AM
                                </td>
                            </tr>
                            <tr className='salah-table'>
                                <td className='prayer-salah-names'>
                                    Sunrise
                                </td>
                                <td className='prayer-salah-times'>
                                    05:52 AM
                                </td>
                            </tr>
                            <tr className='salah-table'>
                                <td className='prayer-salah-names'>
                                    Dhuhr
                                </td>
                                <td className='prayer-salah-times'>
                                    11:57 AM
                                </td>
                            </tr>
                            <tr className='salah-table'>
                                <td className='prayer-salah-names'>
                                    Fajar
                                </td>
                                <td className='prayer-salah-times'>
                                    04:38 AM
                                </td>
                            </tr>
                            <tr className='salah-table'>
                                <td className='prayer-salah-names'>
                                    Fajar
                                </td>
                                <td className='prayer-salah-times'>
                                    04:38 AM
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className='text-center pt-5'>Powerd by <span className='hover:text-white'>Muslim Pro</span></p>
                </div>
                <div className='salah-left-section'>
                    my name is amil patel
                </div>
            </div>
        </>
    )
}

export default PrayerTime
