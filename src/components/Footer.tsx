import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo className="w-12 h-12" />
              <div>
                <h3 className="text-xl font-bold">МАКС Строй Сервис</h3>
                <p className="text-sm text-gray-400">Профессиональная гидроизоляция</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Надежный партнер в сфере гидроизоляции с 24-летним опытом работы. 
              Качество, проверенное временем.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Гидроизоляция фундамента</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Инъектирование трещин</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Гидрофобизация</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ремонт кровли</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Герметизация</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">О компании</a></li>
              <li><a href="#advantages" className="hover:text-white transition-colors">Преимущества</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Как мы работаем</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Контакты</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className='flex items-center gap-3'>
                <a href='https://t.me/+79379992336' target='_blank'>
                  <svg className="w-8 h-8 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 72C183 72 72 183 72 320C72 457 183 568 320 568C457 568 568 457 568 320C568 183 457 72 320 72zM435 240.7C431.3 279.9 415.1 375.1 406.9 419C403.4 437.6 396.6 443.8 390 444.4C375.6 445.7 364.7 434.9 350.7 425.7C328.9 411.4 316.5 402.5 295.4 388.5C270.9 372.4 286.8 363.5 300.7 349C304.4 345.2 367.8 287.5 369 282.3C369.2 281.6 369.3 279.2 367.8 277.9C366.3 276.6 364.2 277.1 362.7 277.4C360.5 277.9 325.6 300.9 258.1 346.5C248.2 353.3 239.2 356.6 231.2 356.4C222.3 356.2 205.3 351.4 192.6 347.3C177.1 342.3 164.7 339.6 165.8 331C166.4 326.5 172.5 322 184.2 317.3C256.5 285.8 304.7 265 328.8 255C397.7 226.4 412 221.4 421.3 221.2C423.4 221.2 427.9 221.7 430.9 224.1C432.9 225.8 434.1 228.2 434.4 230.8C434.9 234 435 237.3 434.8 240.6z" fill='currentColor'/></svg>
                </a>
                <a href='https://wa.me/+79379992336' target='_blank'>
                  <svg className="w-8 h-8 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" fill='currentColor'/></svg>
                </a>
                <a href='tel:89871596489'>
                  <Phone  className="hover:text-white"/>
                </a>
              </div>
              {/* <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 text-blue-400" />
                <div>
                  <p><a href='tel:89379992336' className='hover:text-white'>8 (937) 999-23-36</a></p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" fill='currentColor'/></svg>
                <div>
                  <p><a href='tel:89379992336' className='hover:text-white'>8 (937) 999-23-36</a></p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 72C183 72 72 183 72 320C72 457 183 568 320 568C457 568 568 457 568 320C568 183 457 72 320 72zM435 240.7C431.3 279.9 415.1 375.1 406.9 419C403.4 437.6 396.6 443.8 390 444.4C375.6 445.7 364.7 434.9 350.7 425.7C328.9 411.4 316.5 402.5 295.4 388.5C270.9 372.4 286.8 363.5 300.7 349C304.4 345.2 367.8 287.5 369 282.3C369.2 281.6 369.3 279.2 367.8 277.9C366.3 276.6 364.2 277.1 362.7 277.4C360.5 277.9 325.6 300.9 258.1 346.5C248.2 353.3 239.2 356.6 231.2 356.4C222.3 356.2 205.3 351.4 192.6 347.3C177.1 342.3 164.7 339.6 165.8 331C166.4 326.5 172.5 322 184.2 317.3C256.5 285.8 304.7 265 328.8 255C397.7 226.4 412 221.4 421.3 221.2C423.4 221.2 427.9 221.7 430.9 224.1C432.9 225.8 434.1 228.2 434.4 230.8C434.9 234 435 237.3 434.8 240.6z" fill='currentColor'/></svg>
                <div>
                  <p><a href='tel:89379992336' className='hover:text-white'>8 (937) 999-23-36</a></p>
                </div>
              </div> */}
              
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <p><a href='mailto:info-maxss@yandex.ru' className='hover:text-white'>info-maxss@yandex.ru</a></p>
              </div>
              
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-blue-400" />
                <div>
                  <p>г. Самара,</p>
                  <p>г. Самара, ул. 3 я просека, 64</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-1 text-blue-400" />
                <div>
                  <p>Ежедневно</p>
                  <p>с 8:30 до 17:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 МАКС Строй Сервис. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/docs/privacy-policy.pdf" target='_blank' className="text-sm text-gray-400 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              {/* <a href="/user-agreement" className="text-sm text-gray-400 hover:text-white transition-colors">
                Пользовательское соглашение
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;