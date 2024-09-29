import React from 'react'

export default function Content() {
  return (
    <>
        <div className='h-48 w-full grid grid-cols-4 gap-2 md:grid-cols-6 lg:grid-cols-8'>
            <div className=' bg-zinc-600 rounded-lg'>
              <div className=''>
                <img className='h-32 w-full rounded-t-lg' src="https://scontent.fmnl4-8.fna.fbcdn.net/v/t39.2081-6/285555565_3205769623001699_6777387683974764966_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=ed3f67&_nc_eui2=AeHVqRN68LwIb88Gw3uq0z3bTgNGOJ92bGxOA0Y4n3ZsbN9qA_-Mts8Gzbq64efUNWrPxb4q0BucBT05v1we-J7A&_nc_ohc=BK04SyRYFBEQ7kNvgH6RacR&_nc_ht=scontent.fmnl4-8.fna&_nc_gid=AcIDwBaonmdnYhBRiaWtUe8&oh=00_AYB9XlUx4nh2p8RPKCewPxdpovGcY_N_CEHCQh3lj3KhmA&oe=66FF3E28" alt="Zen Word"/>
              </div>
              <div className='p-2'>
                  <div>
                    <p className='font-bold text-sm'>Zen Word</p>
                    <button className='py-1 px-2 bg-zinc-700 rounded-2xl text-xs font-bold'>Word</button>
                  </div>
              </div>
            </div>
            
            <div className=' bg-zinc-600 rounded-lg'>
              <div>
                <img className='h-32 w-full rounded-t-lg' src="https://scontent.fmnl4-8.fna.fbcdn.net/v/t39.2081-6/405743458_3249865208508133_8334176295618080271_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=ed3f67&_nc_eui2=AeHwNA_0rlK8fB7O-mDLEK2aCI6WUGZbrysIjpZQZluvK9Yl2w3dZNsK0Pj3HgOjxPCTXIij_Bz7xsAbJWTwSSm-&_nc_ohc=6Ic1rfcskBIQ7kNvgF3mb_t&_nc_ht=scontent.fmnl4-8.fna&_nc_gid=AQ2GzXzhVTZFVx4ebA6y7bJ&oh=00_AYAAm1KXqx3Kh9a8qzD8rRknV9fXTA7B4wSHXP9P5qSjRA&oe=66FF6205" alt="Quiz Planet"/>
              </div>
              <div className='p-2'>
                <p className='font-bold text-sm'>Quiz Planet</p>
                <button className='py-1 px-2 bg-zinc-700 rounded-2xl text-xs font-bold text-start'>Quiz</button>
              </div>
            </div>

            <div className=' bg-zinc-600 rounded-lg'>
              <div>
                <img className='h-32 w-full rounded-t-lg' src="https://scontent.fmnl25-3.fna.fbcdn.net/v/t39.2081-6/23666855_185099678737869_7994135259820064768_n.png?stp=c0.0.193.193a_dst-png_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=ed3f67&_nc_eui2=AeEtc1-5Bb-G1zVHJ1rLuuCEXRebbw1B5EddF5tvDUHkR3jqHjIx5v5Nc8YbsuudvNJoqA1pC9sDZM0B4687CkQP&_nc_ohc=nqsKhd4CXwYQ7kNvgF_G13d&_nc_ht=scontent.fmnl25-3.fna&oh=00_AYAmkXvc-mY8Ive-M6G-fMkvJHYUthkW195pQKRNtRo5iQ&oe=66FF3F7C" alt="Spider Solitaire" />
              </div>
              <div className='p-2'>
                <p className='text-sm font-bold'>Spider Solitare</p>
                <button className='py-1 px-2 bg-zinc-700 rounded-2xl text-xs font-bold text-start'>Solitare</button>
              </div>
            </div>

            <div className=' bg-zinc-600 rounded-lg'>
              <div>
                <img className='h-32 w-full rounded-t-lg' src="https://scontent.fmnl25-3.fna.fbcdn.net/v/t39.2081-6/41521703_1825746720854689_5609336754407473152_n.png?stp=c0.0.193.193a_dst-png_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=ed3f67&_nc_eui2=AeEM6ylK1WvdBy2T3LHPlnGVVWsV_kB-1l1VaxX-QH7WXV0eNxvYh3YcYElNmbt1_RjHBdtrVmXnlRAKvBiZtY6i&_nc_ohc=1npZm263eUcQ7kNvgGAwka8&_nc_ht=scontent.fmnl25-3.fna&oh=00_AYAqudXzX5GAF68FwZKeSm7gfY0-i6QWaM7Zy0UCoCwSCw&oe=66FF4F76" alt="Word Crossing" />
              </div>
              <div className='p-2'>
                <p className='text-sm font-bold'>Word Crossing</p>
                <button className='py-1 px-2 bg-zinc-700 rounded-2xl text-xs font-bold text-start'>Puzzle</button>
              </div>
            </div>
        </div>
    </>
  )
}
