//SideBar icon
const BrandLogo = () => {
    return(
        <svg width={56} height={56} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect opacity="0.26" width={56} height={56} rx={12} fill="#EB966A" />
        <path d="M39.6667 11.3334H16.3334C13.5767 11.3334 11.3334 13.5767 11.3334 16.3334V21.0517C11.3334 22.8067 11.97 24.4017 13 25.6284V41.3334C13 41.7754 13.1756 42.1993 13.4882 42.5119C13.8008 42.8244 14.2247 43 14.6667 43H28C28.4421 43 28.866 42.8244 29.1786 42.5119C29.4911 42.1993 29.6667 41.7754 29.6667 41.3334V33H36.3334V41.3334C36.3334 41.7754 36.509 42.1993 36.8215 42.5119C37.1341 42.8244 37.558 43 38 43H41.3334C41.7754 43 42.1993 42.8244 42.5119 42.5119C42.8244 42.1993 43 41.7754 43 41.3334V25.6267C44.03 24.4017 44.6667 22.8067 44.6667 21.05V16.3334C44.6667 13.5767 42.4234 11.3334 39.6667 11.3334ZM41.3334 16.3334V21.0517C41.3334 22.9517 39.9184 24.5717 38.1817 24.6634L38 24.6667C36.1617 24.6667 34.6667 23.1717 34.6667 21.3334V14.6667H39.6667C40.5867 14.6667 41.3334 15.415 41.3334 16.3334ZM24.6667 21.3334V14.6667H31.3334V21.3334C31.3334 23.1717 29.8384 24.6667 28 24.6667C26.1617 24.6667 24.6667 23.1717 24.6667 21.3334ZM14.6667 16.3334C14.6667 15.415 15.4134 14.6667 16.3334 14.6667H21.3334V21.3334C21.3334 23.1717 19.8384 24.6667 18 24.6667L17.8184 24.6617C16.0817 24.5717 14.6667 22.9517 14.6667 21.0517V16.3334ZM24.6667 34.6667H18V29.6667H24.6667V34.6667Z" fill="url(#paint0_linear_12290_2008)" />
        <defs>
            <linearGradient id="paint0_linear_12290_2008" x1={28} y1="11.3334" x2={28} y2={43} gradientUnits="userSpaceOnUse">
            <stop stopColor="#EA9769" />
            <stop offset={1} stopColor="#EA6969" />
            </linearGradient>
        </defs>
        </svg>
    );
};
const HomeIcon = ( {activePage} ) => {
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
            d="M9.73024 2.78835C11.0002 1.77935 12.7802 1.73935 14.0892 2.66835L14.2502 2.78835L20.3392 7.65935C21.0092 8.17835 21.4202 8.94936 21.4902 9.78835L21.5002 9.98935V18.0984C21.5002 20.1884 19.8492 21.8884 17.7802 21.9984H15.7902C14.8392 21.9794 14.0702 21.2394 14.0002 20.3094L13.9902 20.1684V17.3094C13.9902 16.9984 13.7592 16.7394 13.4502 16.6884L13.3602 16.6784H10.6892C10.3702 16.6884 10.1102 16.9184 10.0702 17.2184L10.0602 17.3094V20.1594C10.0602 20.2184 10.0492 20.2884 10.0402 20.3384L10.0302 20.3594L10.0192 20.4284C9.90024 21.2794 9.20024 21.9284 8.33024 21.9894L8.20024 21.9984H6.41024C4.32024 21.9984 2.61024 20.3594 2.50024 18.2984V9.98935C2.50924 9.13835 2.88024 8.34835 3.50024 7.79835L9.73024 2.78835ZM13.3802 3.87835C12.6202 3.26835 11.5402 3.23935 10.7402 3.76835L10.5892 3.87835L4.50924 8.77936C4.16024 9.03835 3.95024 9.42836 3.90024 9.83836L3.88924 9.99835V18.0984C3.88924 19.4284 4.92924 20.5184 6.25024 20.5984H8.20024C8.42024 20.5984 8.61024 20.4494 8.63924 20.2394L8.66024 20.0594L8.67024 20.0084V17.3094C8.67024 16.2394 9.49024 15.3694 10.5402 15.2884H13.3602C14.4292 15.2884 15.2992 16.1094 15.3802 17.1594V20.1684C15.3802 20.3784 15.5302 20.5594 15.7302 20.5984H17.5892C18.9292 20.5984 20.0192 19.5694 20.0992 18.2584L20.1102 18.0984V9.99835C20.0992 9.56936 19.9202 9.16835 19.6102 8.86935L19.4802 8.75835L13.3802 3.87835Z" 
            fill={`${activePage === "home" ? "#fff" : "#EA7C69"}`}
        />
        </svg>
    );
};
const DiscountIcon = ({activePage}) => {
    return(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
            d="M11.9511 0.716446L12.1334 0.886452L12.8522 1.6052C13.0991 1.85092 13.4229 2.00242 13.7674 2.03646L13.9161 2.04378H14.9441C16.5479 2.04378 17.8594 3.29795 17.951 4.87883L17.9561 5.05578V6.08278C17.9561 6.43258 18.0767 6.76886 18.2943 7.03624L18.3934 7.14645L19.1122 7.86525C20.2437 8.99165 20.2943 10.7929 19.2577 11.98L19.1224 12.1251L18.3941 12.8535C18.1491 13.099 17.9975 13.4231 17.9634 13.7672L17.9561 13.9158V14.9448C17.9561 16.5485 16.702 17.8591 15.1211 17.9507L14.9441 17.9558H13.9161C13.5676 17.9558 13.2309 18.0769 12.9633 18.2951L12.8531 18.3945L12.1352 19.1113C11.01 20.2442 9.20745 20.2944 8.01992 19.2574L7.86577 19.1131L7.14866 18.396C6.90027 18.1494 6.57583 17.9973 6.23232 17.9631L6.0841 17.9558H5.0551C3.45197 17.9558 2.14083 16.7023 2.04922 15.1217L2.0441 14.9448V13.9158C2.0441 13.5678 1.92281 13.2308 1.70472 12.9637L1.60541 12.8537L0.888277 12.1356C-0.244298 11.0094 -0.294536 9.20679 0.742484 8.02044L0.877774 7.87545L1.60389 7.14834C1.85084 6.89963 2.00267 6.57581 2.03676 6.23146L2.0441 6.08278V5.05578L2.04922 4.87885C2.13744 3.35668 3.3566 2.13715 4.87824 2.0489L5.0551 2.04378H6.0841C6.43259 2.04378 6.76936 1.9229 7.0364 1.70572L7.14641 1.60682L7.86457 0.887655C8.99094 -0.243823 10.7934 -0.293637 11.9511 0.716446ZM9.04152 1.84256L8.9268 1.94674L8.20555 2.66899C7.6883 3.18258 7.00418 3.48966 6.28193 3.53727L6.0841 3.54378H5.0551C4.26754 3.54378 3.61982 4.14793 3.55028 4.91821L3.5441 5.05578V6.08278C3.5441 6.81195 3.2795 7.5131 2.80221 8.06116L2.6668 8.20674L1.93963 8.93491C1.38782 9.48923 1.35569 10.3649 1.84334 10.9589L1.9478 11.0738L2.66706 11.7941C3.18147 12.3097 3.48976 12.995 3.53756 13.7178L3.5441 13.9158V14.9448C3.5441 15.7328 4.14781 16.3801 4.91762 16.4496L5.0551 16.4558H6.0841C6.81189 16.4558 7.51365 16.7207 8.06183 17.198L8.20743 17.3335L8.93075 18.0568C9.48896 18.6119 10.3649 18.6442 10.9584 18.1565L11.0731 18.0521L11.794 17.3322C12.3107 16.8179 12.9952 16.5101 13.7181 16.4623L13.9161 16.4558H14.9441C15.7328 16.4558 16.3804 15.8524 16.4499 15.0823L16.4561 14.9448V13.9158C16.4561 13.1869 16.7209 12.4839 17.1976 11.9383L17.3328 11.7935L18.0603 11.066C18.6121 10.511 18.644 9.63577 18.1571 9.04195L18.0528 8.92711L17.3309 8.20523C16.817 7.68765 16.5102 7.00422 16.4626 6.28094L16.4561 6.08278V5.05578C16.4561 4.26737 15.852 3.61951 15.0817 3.54996L14.9441 3.54378H13.9161C13.1869 3.54378 12.4849 3.27939 11.938 2.80243L11.7928 2.66711L11.1048 1.97734L11.065 1.94031C10.5107 1.38855 9.63484 1.35624 9.04152 1.84256ZM13.0965 12.0424C13.1665 12.1124 13.2265 12.1924 13.2665 12.2824C13.2965 12.3724 13.3165 12.4724 13.3165 12.5724C13.3165 12.6734 13.2965 12.7624 13.2665 12.8524C13.2265 12.9424 13.1665 13.0324 13.0965 13.1024C12.9565 13.2424 12.7665 13.3224 12.5665 13.3224C12.3665 13.3224 12.1765 13.2424 12.0365 13.1024C11.9665 13.0324 11.9165 12.9424 11.8765 12.8524C11.8365 12.7624 11.8165 12.6734 11.8165 12.5724C11.8165 12.4724 11.8365 12.3724 11.8765 12.2824C11.9165 12.1924 11.9665 12.1124 12.0365 12.0424C12.3165 11.7624 12.8165 11.7624 13.0965 12.0424ZM13.1001 6.89915C13.3664 7.16542 13.3906 7.58208 13.1728 7.87569L13.1001 7.95981L7.96013 13.0998C7.66724 13.3927 7.19237 13.3927 6.89947 13.0998C6.63321 12.8335 6.609 12.4169 6.82686 12.1233L6.89947 12.0392L12.0395 6.89915C12.3324 6.60626 12.8072 6.60626 13.1001 6.89915ZM7.9564 6.90278C8.09641 7.04178 8.1764 7.23278 8.1764 7.43278C8.1764 7.53278 8.1664 7.62178 8.1264 7.71278C8.0864 7.80278 8.0264 7.88278 7.9564 7.96278C7.8864 8.03278 7.8064 8.08178 7.7164 8.12178C7.6264 8.16178 7.5264 8.18278 7.4264 8.18278C7.3264 8.18278 7.2364 8.16178 7.1464 8.12178C7.0564 8.08178 6.9664 8.03278 6.8964 7.96278C6.8264 7.88278 6.7764 7.80278 6.7364 7.71278C6.6964 7.62178 6.6764 7.53278 6.6764 7.43278C6.6764 7.33178 6.6964 7.23278 6.7364 7.14278C6.7764 7.05278 6.8264 6.96278 6.8964 6.90278C7.1864 6.62178 7.6764 6.62178 7.9564 6.90278Z" 
            fill={`${activePage === "discount" ? "#fff" : "#EA7C69"}`}/>
        </svg>
    );
};
const GraphIcon = ({activePage}) => {
    return(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
            d="M8.49776 4.7606C8.58545 4.93485 8.63817 5.12392 8.65332 5.32102L9.04185 10.8095C9.04706 10.8847 9.08269 10.9548 9.14085 11.0042C9.18448 11.0413 9.23808 11.0645 9.29801 11.0712L9.35991 11.0724L14.9341 10.7366C15.3867 10.71 15.8305 10.8675 16.1604 11.1719C16.4902 11.4763 16.6768 11.9004 16.6744 12.3912C16.4265 16.0037 13.773 19.0237 10.159 19.8065C6.54503 20.5893 2.83611 18.9474 1.05781 15.7848C0.582292 14.9695 0.261779 14.0778 0.113798 13.1749L0.0664268 12.8359C0.0253023 12.5821 0.00319023 12.3257 0 12.0795L0.00311369 11.8372C0.0133983 8.06546 2.66156 4.80403 6.38809 3.92434L6.64383 3.86807L6.7814 3.84532C7.502 3.74681 8.21097 4.12453 8.49776 4.7606ZM7.01643 5.27813L6.93217 5.28772L6.70369 5.33933C3.73526 6.05477 1.6062 8.61031 1.48796 11.621L1.4828 11.8661C1.47569 12.0525 1.4825 12.2392 1.50499 12.4378L1.53277 12.6408C1.63212 13.495 1.90795 14.3206 2.34914 15.0772C3.81632 17.6863 6.86669 19.0367 9.839 18.3929C12.8113 17.7491 14.9936 15.2653 15.1958 12.3414C15.1958 12.2974 15.1774 12.2552 15.1446 12.225C15.1228 12.2049 15.0959 12.1912 15.0675 12.1851L15.024 12.1817L9.45904 12.5169C8.98938 12.5503 8.52549 12.3992 8.17003 12.0971C7.81456 11.7951 7.59684 11.3669 7.56522 10.91L7.17702 5.42617C7.17632 5.41708 7.17385 5.40822 7.15682 5.37299C7.1315 5.31695 7.07648 5.28131 7.01643 5.27813ZM11.423 0.00105033C15.7084 0.122269 19.3029 3.20162 19.9904 7.34084L20 7.4567L19.9977 7.65855C19.9737 7.95621 19.8538 8.23931 19.6545 8.46677C19.4041 8.75241 19.0477 8.92862 18.6588 8.95674L12.0133 9.39005C11.1615 9.43818 10.4295 8.80509 10.3741 7.97348L9.92986 1.44914L9.9349 1.30295L9.95698 1.13824C10.0162 0.84619 10.1684 0.579378 10.3925 0.376428C10.6739 0.121564 11.0474 -0.0133911 11.423 0.00105033ZM11.4113 1.44902L11.8511 7.87814C11.8537 7.91719 11.888 7.94688 11.9214 7.94502L18.5182 7.51352L18.4854 7.33352C17.8318 4.0802 15.0119 1.66443 11.6287 1.45932L11.4113 1.44902Z" 
            fill={`${activePage === "graph" ? "#fff" : "#EA7C69"}`}/>
        </svg>
    );
};
const MessageIcon = ({activePage}) => {
    return(
        <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
            d="M15.3212 0.758057C16.8351 0.775107 18.2761 1.41599 19.3085 2.5315C20.3408 3.64701 20.8745 5.13976 20.7865 6.61703L20.7852 12.854C20.8745 14.3763 20.3408 15.8691 19.3085 16.9846C18.2761 18.1001 16.8351 18.741 15.3127 18.7581H6.25208C3.08255 18.7581 0.795898 16.1965 0.795898 12.8991V6.61703C0.795898 3.31957 3.08255 0.758057 6.25208 0.758057H15.3212ZM15.3043 2.28644H6.25208C3.95869 2.28644 2.31334 4.12961 2.31334 6.61703V12.8991C2.31334 15.3865 3.95869 17.2297 6.25208 17.2297H15.3043C16.4032 17.2173 17.4491 16.7521 18.1985 15.9424C18.9479 15.1327 19.3352 14.0492 19.2691 12.8991L19.2704 6.57194C19.3352 5.46693 18.9479 4.38339 18.1985 3.57368C17.4491 2.76397 16.4032 2.29878 15.3043 2.28644ZM16.8199 6.39642C17.058 6.69598 17.0359 7.12067 16.7841 7.39357L16.7017 7.47061L12.5947 10.7817C11.5972 11.5648 10.219 11.6039 9.17894 10.8956L9.01763 10.7775L4.88316 7.47259C4.55494 7.21022 4.50002 6.72952 4.76051 6.39891C4.99731 6.09837 5.41326 6.02533 5.73353 6.21166L5.82647 6.27537L9.95571 9.57618C10.4187 9.93964 11.0534 9.9676 11.5367 9.66487L11.6542 9.5823L15.7535 6.27736C16.0806 6.01361 16.5581 6.06692 16.8199 6.39642Z" 
            fill={`${activePage === "message" ? "#fff" : "#EA7C69"}`}/>
        </svg>
    );
};
const NotificationIcon = ({activePage}) => {
    return(
        <svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
            d="M14.608 19.6906C14.9045 19.9321 14.9515 20.3713 14.7129 20.6715C14.5366 20.8935 14.3327 21.0922 14.1167 21.255C13.3891 21.826 12.464 22.0849 11.5453 21.9754C10.6258 21.8659 9.787 21.3962 9.21459 20.6689C8.9774 20.3676 9.02646 19.9286 9.32418 19.6885C9.62189 19.4484 10.0555 19.4981 10.2927 19.7995C10.6379 20.2381 11.1467 20.523 11.7064 20.5896C12.2669 20.6564 12.8307 20.4986 13.2826 20.1443C13.4158 20.0437 13.5355 19.927 13.6389 19.7969C13.8775 19.4967 14.3114 19.4491 14.608 19.6906ZM5.15213 8.99974L5.16444 8.40391C5.17324 8.14906 5.18686 7.91248 5.20685 7.68096C5.50654 4.44456 8.59565 2 11.9648 2H12.0361C15.4034 2 18.4934 4.44285 18.8034 7.68536C18.8212 7.89148 18.8288 8.07458 18.8311 8.33206L18.832 9.11982C18.8327 9.19158 18.8339 9.25469 18.8358 9.31353L18.845 9.50977L18.8896 9.69688C19.0303 10.218 19.2776 10.7052 19.6162 11.1282L19.7669 11.3055L19.8286 11.3847C20.2348 11.9917 20.4668 12.698 20.5 13.4587L20.499 13.862C20.4707 14.763 20.1399 15.6331 19.5338 16.3582C18.7311 17.2101 17.6434 17.7393 16.4873 17.8457C13.502 18.1699 10.49 18.1699 7.51296 17.8466C6.34896 17.7346 5.26444 17.2069 4.42663 16.3223C3.80882 15.5691 3.48041 14.6208 3.5009 13.6624L3.50175 13.4242C3.53744 12.6955 3.76804 11.9898 4.16936 11.3802L4.23653 11.2938C4.70525 10.7799 5.02569 10.151 5.16473 9.47306L5.14969 9.53395L5.15213 8.99974ZM12.0361 3.39535H11.9648C9.26651 3.39535 6.80804 5.34087 6.57967 7.80678C6.56798 7.94228 6.55866 8.08207 6.55137 8.2292L6.53532 8.69559L6.52879 9.61486L6.51441 9.75667C6.32444 10.683 5.88728 11.5409 5.24929 12.2404L5.29856 12.1833L5.21045 12.3291C5.04539 12.6265 4.9389 12.9495 4.89682 13.2682L4.87935 13.4587L4.87919 13.6774C4.86568 14.3142 5.08086 14.9356 5.45369 15.3931C6.02881 15.9985 6.80682 16.377 7.65168 16.4583C10.5393 16.7719 13.4527 16.7719 16.3514 16.4572C17.1871 16.3802 17.9645 16.002 18.5084 15.4267C18.92 14.933 19.1375 14.3097 19.1216 13.6536L19.1224 13.4901C19.1013 13.0186 18.951 12.5613 18.6873 12.1672L18.7026 12.1926L18.5647 12.0309C18.0893 11.4441 17.744 10.7635 17.5517 10.034L17.4868 9.75818L17.4739 9.66551C17.4642 9.53013 17.4585 9.40982 17.4555 9.26514L17.4528 8.3605C17.4509 8.13044 17.4447 7.97558 17.4307 7.81326C17.1944 5.34075 14.7336 3.39535 12.0361 3.39535Z" 
            fill={`${activePage === "notification" ? "#fff" : "#EA7C69"}`}/>
        </svg>       
    );
};
const SettingsIcon = ({activePage}) => {
    return(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
            d="M10.6161 2.17992e-07C11.3251 -0.000285658 12.0041 0.280614 12.4983 0.77871C12.9925 1.27681 13.2599 1.94968 13.2383 2.57766L13.2468 2.72535C13.2641 2.87079 13.3124 3.01116 13.3908 3.14054C13.5435 3.39567 13.7935 3.58081 14.0857 3.65514C14.3779 3.72947 14.6882 3.68688 14.9821 3.51839L15.146 3.4355C16.3759 2.86897 17.8511 3.31918 18.5333 4.47928L19.1465 5.52174C19.1627 5.54922 19.1769 5.57762 19.1892 5.60674L19.2461 5.71842C19.7945 6.86519 19.4043 8.22927 18.3624 8.92228L18.1051 9.08068C17.9706 9.17256 17.8585 9.29258 17.7742 9.43678C17.6218 9.69291 17.58 9.99795 17.658 10.2844C17.736 10.5708 17.9272 10.8149 18.2174 10.9793L18.3843 11.0841C18.8887 11.4297 19.253 11.9391 19.4119 12.523C19.5912 13.1817 19.495 13.8833 19.1399 14.4804L18.4803 15.557L18.3808 15.7089C17.6058 16.8008 16.1011 17.1344 14.9527 16.485L14.8166 16.4163C14.6746 16.3541 14.5214 16.3199 14.382 16.316C14.0786 16.3146 13.7872 16.432 13.5727 16.6422C13.3582 16.8524 13.2383 17.1379 13.2391 17.4698L13.231 17.6414C13.12 18.9703 11.9845 20 10.6164 20H9.38106C7.93219 20 6.75765 18.8493 6.75912 17.4753L6.75063 17.3277C6.73337 17.1822 6.68504 17.0418 6.6027 16.9057C6.45336 16.65 6.20591 16.4633 5.91538 16.3871C5.62484 16.3109 5.31529 16.3516 5.01565 16.5213L4.83762 16.6084C4.2746 16.8565 3.63953 16.9023 3.04445 16.7366C2.37306 16.5497 1.80539 16.1083 1.47412 15.5224L0.83679 14.4442L0.751966 14.2844C0.171573 13.0841 0.626514 11.6412 1.78115 10.9875L1.88645 10.9228C2.19491 10.7137 2.37987 10.3688 2.37987 10C2.37987 9.59896 2.16149 9.22838 1.77948 9.01151L1.62449 8.91408C0.510007 8.15476 0.169493 6.68049 0.859895 5.50696L1.50918 4.46166C2.23128 3.23376 3.83155 2.81017 5.06235 3.50171L5.19559 3.5713C5.33141 3.63238 5.47895 3.6648 5.62101 3.66628C6.24742 3.66634 6.75775 3.17352 6.76724 2.54181L6.77575 2.3478C6.82704 1.74716 7.09307 1.1827 7.52796 0.754574C8.01861 0.27155 8.6855 2.17992e-07 9.38106 2.17992e-07H10.6161ZM10.6164 1.44774H9.38106C9.07863 1.44774 8.78866 1.56581 8.57533 1.77582C8.38625 1.96196 8.27058 2.20741 8.25028 2.43661L8.23685 2.7415C8.13339 4.07087 6.99969 5.11416 5.61326 5.11398C5.25588 5.11034 4.90355 5.03293 4.54427 4.87026L4.3519 4.77085C3.8038 4.46315 3.1049 4.64815 2.78057 5.19925L2.13128 6.24455C1.83377 6.75044 1.98256 7.39466 2.44324 7.70925L2.70395 7.871C3.42196 8.34666 3.85754 9.14295 3.85754 10C3.85754 10.8446 3.43413 11.634 2.70219 12.1296L2.54639 12.2256C2.03354 12.5163 1.83562 13.144 2.07398 13.6383L2.13027 13.7449L2.75952 14.8084C2.90728 15.0696 3.1552 15.2624 3.44842 15.344C3.70831 15.4164 3.98569 15.3964 4.20208 15.3018L4.3108 15.2497C4.91096 14.9066 5.62614 14.8126 6.29737 14.9886C6.96861 15.1645 7.54028 15.5959 7.87937 16.1768C8.06179 16.478 8.17721 16.8132 8.2219 17.1985L8.24205 17.552C8.30426 18.1145 8.79047 18.5523 9.38106 18.5523H10.6164C11.2137 18.5523 11.7099 18.1023 11.7565 17.5511L11.7621 17.4421C11.7588 16.7585 12.0345 16.1019 12.5279 15.6185C13.0212 15.1351 13.6914 14.865 14.4053 14.8686C14.7556 14.8778 15.1004 14.9547 15.4528 15.11L15.7687 15.2682C16.2647 15.4814 16.8529 15.3258 17.1511 14.9067L17.2236 14.7957L17.868 13.7436C18.0203 13.4875 18.0621 13.1824 17.9841 12.896C17.915 12.6422 17.7566 12.4207 17.5645 12.2882L17.2922 12.1195C16.7716 11.7748 16.3932 11.2563 16.2302 10.6574C16.0509 9.99866 16.1471 9.29707 16.4946 8.71262C16.6849 8.38716 16.9464 8.10733 17.2873 7.87532L17.448 7.77613C17.9601 7.4827 18.1578 6.85504 17.9212 6.35884L17.8505 6.22529L17.8378 6.19726L17.253 5.20208C16.9764 4.73175 16.4008 4.52853 15.9125 4.6891L15.8015 4.73265L15.6983 4.78415C15.1001 5.12941 14.3863 5.22736 13.7143 5.05641C13.0423 4.88546 12.4673 4.45965 12.1181 3.87616C11.9357 3.57504 11.8203 3.23984 11.7756 2.85454L11.7624 2.60249C11.7713 2.29923 11.6546 2.00536 11.4387 1.78783C11.2229 1.57029 10.9264 1.44774 10.6164 1.44774ZM10.0032 6.73182C11.8455 6.73182 13.339 8.19503 13.339 10C13.339 11.805 11.8455 13.2682 10.0032 13.2682C8.16095 13.2682 6.66748 11.805 6.66748 10C6.66748 8.19503 8.16095 6.73182 10.0032 6.73182ZM10.0032 8.17956C8.97705 8.17956 8.14516 8.9946 8.14516 10C8.14516 11.0054 8.97705 11.8204 10.0032 11.8204C11.0294 11.8204 11.8613 11.0054 11.8613 10C11.8613 8.9946 11.0294 8.17956 10.0032 8.17956Z" 
            fill={`${activePage === "settings" ? "#fff" : "#EA7C69"}`}/>
        </svg>        
    );
};
const LogOutIcon = ({activePage}) => {
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
            d="M11.331 2.02148C13.7102 2.02148 15.6521 3.89542 15.7611 6.24772L15.766 6.45648V7.38948C15.766 7.8037 15.4302 8.13948 15.016 8.13948C14.6363 8.13948 14.3225 7.85733 14.2728 7.49125L14.266 7.38948V6.45648C14.266 4.89358 13.044 3.61575 11.5034 3.52647L11.331 3.52148H6.45597C4.89392 3.52148 3.61623 4.74362 3.52696 6.28406L3.52197 6.45648V17.5865C3.52197 19.1493 4.74388 20.4272 6.28363 20.5165L6.45597 20.5215H11.341C12.8983 20.5215 14.172 19.3039 14.261 17.7693L14.266 17.5975V16.6545C14.266 16.2403 14.6018 15.9045 15.016 15.9045C15.3957 15.9045 15.7095 16.1866 15.7591 16.5527L15.766 16.6545V17.5975C15.766 19.9687 13.8992 21.9046 11.5553 22.0164L11.341 22.0215H6.45597C4.07753 22.0215 2.13581 20.1474 2.0268 17.7952L2.02197 17.5865V6.45648C2.02197 4.07743 3.89573 2.13535 6.24728 2.02631L6.45597 2.02148H11.331ZM19.326 8.50234L19.4103 8.57478L22.3383 11.4898C22.3647 11.5159 22.3878 11.5426 22.409 11.5707L22.3383 11.4898C22.3689 11.5202 22.3963 11.5526 22.4205 11.5865C22.4376 11.6103 22.4533 11.6354 22.4676 11.6614C22.4702 11.6665 22.4728 11.6715 22.4754 11.6764C22.4881 11.7004 22.4993 11.7253 22.5092 11.7508C22.5132 11.762 22.5173 11.7733 22.5211 11.7847C22.5284 11.8058 22.5345 11.8274 22.5397 11.8494C22.5421 11.8612 22.5445 11.8729 22.5467 11.8846C22.5508 11.905 22.5538 11.9261 22.5559 11.9474C22.557 11.9623 22.558 11.977 22.5586 11.9917C22.5593 12.0016 22.5595 12.0115 22.5595 12.0214L22.5586 12.0497C22.5581 12.0651 22.557 12.0805 22.5555 12.0958L22.5595 12.0214C22.5595 12.0682 22.5552 12.1141 22.547 12.1585C22.5445 12.1696 22.5421 12.1814 22.5394 12.193C22.5343 12.2162 22.5279 12.2387 22.5205 12.2607C22.5167 12.2709 22.513 12.2813 22.509 12.2915C22.4997 12.3164 22.4889 12.3405 22.4769 12.3639C22.4739 12.3692 22.4708 12.3751 22.4675 12.381C22.4331 12.4443 22.39 12.5015 22.3398 12.5517L22.3384 12.5527L19.4104 15.4687C19.1169 15.761 18.642 15.76 18.3498 15.4665C18.084 15.1997 18.0607 14.783 18.2791 14.4898L18.3519 14.4059L19.991 12.7705L9.76847 12.7714C9.35426 12.7714 9.01847 12.4356 9.01847 12.0214C9.01847 11.6417 9.30063 11.3279 9.6667 11.2782L9.76847 11.2714L19.993 11.2705L18.352 9.63779C18.0852 9.37212 18.06 8.95551 18.2772 8.66142L18.3497 8.57714C18.6153 8.31028 19.0319 8.28514 19.326 8.50234Z" 
            fill={`${activePage === "logout" ? "#fff" : "#EA7C69"}`}/>
        </svg>
    );
};
export {
    BrandLogo,
    HomeIcon,
    DiscountIcon,
    GraphIcon,
    MessageIcon,
    NotificationIcon,
    SettingsIcon,
    LogOutIcon,
};