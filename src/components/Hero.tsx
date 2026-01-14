import React, { useState, useRef } from 'react';
import { ChevronRight, Shield, Clock, Award } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';
import { sendForm } from '../services/api';
import CallbackModal from './shared/CallbackModal';
import { IMaskInput } from 'react-imask';

const Hero = () => {
	const [formData, setFormData] = useState({ name: '', phone: '' });
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitMessage, setSubmitMessage] = useState('');
	const [showCallbackModal, setShowCallbackModal] = useState(false);
	const ref = useRef(null);
	const inputRef = useRef(null);
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitMessage('');

		if (formData.phone.length !== 11){
			setIsSubmitting(false);
			setSubmitMessage(
				'Ошибка: введите корректный номер.'
			);
			return
		}
		
		try {
			await sendForm({
				name: formData.name,
				phone: formData.phone,
        service: 'Консультация с главной страницы'
			});

      setSubmitMessage('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
			setFormData({ name: '', phone: '' });
		} catch (error) {
      console.error('handleSubmit', error)
      setSubmitMessage('Ошибка отправки. Попробуйте позвонить нам напрямую.');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
				{/* Animated Background */}
				<div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
					<div className="absolute inset-0 bg-black/20"></div>

					{/* Animated Particles */}
					<div className="absolute inset-0">
						{[...Array(20)].map((_, i) => (
							<div
								key={i}
								className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
								style={{
									left: `${Math.random() * 100}%`,
									top: `${Math.random() * 100}%`,
									animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
								}}
							/>
						))}
					</div>

					{/* Geometric Shapes */}
					<div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-xl animate-pulse"></div>
					<div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
				</div>

				<div className="container mx-auto px-4 py-20 relative z-10">
					<div className="grid lg:grid-cols-2 gap-16 lg:gap-2 2xl:gap-12 items-center">
						{/* Content */}
						<div className="text-white">
							<div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 animate-fade-in">
								<Shield className="w-4 h-4 mr-2" />
								Гарантия качества до 7 лет
							</div>

							<h1 className="text-4xl 2xl:text-6xl font-bold leading-tight mb-6 animate-fade-in animation-delay-200">
								Профессиональная
								<span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
									Гидроизоляция
								</span>
							</h1>

							<p className="text-xl lg:text-2xl mb-8 text-blue-100 animate-fade-in animation-delay-400">
                Защита зданий и сооружений от влаги с использованием передовых технологий и материалов
							</p>
              <ul className='mb-8 grid lg:grid-cols-2 gap-x-2 gap-y-[12px] items-start text-base 2xl:text-lg text-pretty'>
                <li className='flex items-baseline gap-x-[8px]'><span className='w-[8px] h-[8px] rounded-[50%] bg-orange-600 shrink-0'></span> Гидроизоляция стен от&nbsp;2000&nbsp;₽/м2</li>
                <li className='flex items-baseline gap-x-[8px]'><span className='w-[8px] h-[8px] rounded-[50%] bg-orange-600 shrink-0'></span> Ремонт бетона от&nbsp;900&nbsp;₽</li>
                <li className='flex items-baseline gap-x-[8px]'><span className='w-[8px] h-[8px] rounded-[50%] bg-orange-600 shrink-0'></span> Инъектирование стен от&nbsp;300&nbsp;₽</li>
                <li className='flex items-baseline gap-x-[8px]'><span className='w-[8px] h-[8px] rounded-[50%] bg-orange-600 shrink-0'></span> Устройство отмостки от&nbsp;2000&nbsp;₽/м2</li>
                <li className='flex items-baseline gap-x-[8px]'><span className='w-[8px] h-[8px] rounded-[50%] bg-orange-600 shrink-0'></span> Гидроизоляция узлов прохода от&nbsp;2500&nbsp;₽</li>
                <li className='flex items-baseline gap-x-[8px]'><span className='w-[8px] h-[8px] rounded-[50%] bg-orange-600 shrink-0'></span> Устройство дренажной системы от&nbsp;2000&nbsp;₽ м/п</li>
							</ul>


							<div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-1000">
								<button
									// onClick={() => scrollToSection('contact')}
									onClick={() => setShowCallbackModal(true)}
									className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center group"
								>
									Получить консультацию
									<ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
								</button>
								<button
									// onClick={() => scrollToSection('reviews')}
									onClick={() => scrollToSection('services')}
									className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-all backdrop-blur-sm"
								>
									Посмотреть работы
								</button>
							</div>
						</div>

						{/* Form */}
						<div className="animate-fade-in animation-delay-800">
							<div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
								<h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
									Получите скидку 10%
								</h3>
								<p className="text-gray-600 mb-6 text-center">
                  Оставьте заявку и получите бесплатную консультацию специалиста
								</p>

                <form onSubmit={handleSubmit} className="space-y-4">
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Ваше имя *
										</label>
										<input
											type="text"
											required
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
											placeholder="Введите ваше имя"
											value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Телефон *
										</label>
										<IMaskInput
											mask={'+{7} (000) 000-00-00'}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
											value={formData.phone}
											unmask={true}
											ref={ref}
											inputRef={inputRef}
											onAccept={(value) => {
												setFormData({
													...formData,
													phone: value,
												});
											}}
											name="phone"
											type="tel"
											placeholder="+7 (___) ___-__-__"
                      required
										/>
									</div>

									<button
										type="submit"
										disabled={isSubmitting}
										className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
									>
                    {isSubmitting ? 'Отправляем...' : 'Получить консультацию'}
									</button>
								</form>

								{submitMessage && (
                  <div className={`mt-4 p-3 rounded-lg text-sm text-center ${
											submitMessage.includes('Ошибка')
												? 'bg-red-100 text-red-700'
												: 'bg-green-100 text-green-700'
                  }`}>
										{submitMessage}
									</div>
								)}

								<p className="text-xs text-gray-500 mt-4 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
								</p>
							</div>

							{/* Features */}
							<div className="grid sm:grid-cols-3 gap-6 mt-6">
								{[
                  { icon: Clock, title: 'Быстро', desc: 'от 1 дня' },
                  { icon: Award, title: 'Качественно', desc: 'ГОСТ, СНиП' },
                  { icon: Shield, title: 'Надежно', desc: 'гарантия 7 лет' }
								].map((item, index) => (
									<div
										key={index}
										className="flex flex-col xl:flex-row items-center xl:space-x-3 animate-fade-in p-4 bg-white/10 backdrop-blur-sm rounded-lg"
                    style={{ animationDelay: `${600 + index * 200}ms` }}
									>
										<div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
											<item.icon className="w-5 h-5 text-white" />
										</div>
										<div className="text-center xl:text-start">
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="text-sm text-blue-200">{item.desc}</p>
										</div>
									</div>
								))}
							</div>

						</div>
					</div>
				</div>
			</section>
      <CallbackModal showCallbackModal={showCallbackModal} setShowCallbackModal={setShowCallbackModal} />
		</>
	);
};

export default Hero;