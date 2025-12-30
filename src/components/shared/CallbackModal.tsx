import { useState, useEffect, useRef } from 'react';
import { sendForm } from '../../services/api';
import { IMaskInput } from 'react-imask';

interface CallbackModalPropsType {
	showCallbackModal: boolean;
	setShowCallbackModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CallbackModal: React.FC<CallbackModalPropsType> = ({
	showCallbackModal = false,
	setShowCallbackModal,
}) => {
	// const [showCallbackModal, setShowCallbackModal] = useState(show);
	const [callbackMessage, setCallbackMessage] = useState('');
	const [callbackPhone, setCallbackPhone] = useState('');
	const [isSubmittingCallback, setIsSubmittingCallback] = useState(false);
	const ref = useRef(null);
	const inputRef = useRef(null);
	useEffect(() => {
		if (showCallbackModal) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
		return () => {
			document.body.classList.remove('overflow-hidden');
		};
	}, [showCallbackModal]);

	const handleCallbackRequest = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmittingCallback(true);
		setCallbackMessage('');

		try {
			await sendForm({
				phone: callbackPhone,
				service: 'Заказ обратного звонка',
			});
			setCallbackMessage(
				'Заявка отправлена! Мы перезвоним в ближайшее время.'
			);
			setCallbackPhone('');
			setTimeout(() => {
				setShowCallbackModal(false);
				setCallbackMessage('');
			}, 2000);
		} catch (error) {
			console.error('requestCallback', error);
			setCallbackMessage(
				'Ошибка отправки. Попробуйте позвонить напрямую.'
			);
		} finally {
			setIsSubmittingCallback(false);
		}
	};

	if (!showCallbackModal) {
		return null;
	}

	return (
		<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
			<div className="bg-white rounded-2xl p-8 max-w-md w-full">
				<h3 className="text-2xl font-bold text-gray-900 mb-4">
					Заказать обратный звонок
				</h3>
				<p className="text-gray-600 mb-6">
					Оставьте номер телефона и мы перезвоним в течение 15 минут
				</p>

				<form onSubmit={handleCallbackRequest}>
					<IMaskInput
						mask={'+{7} (000) 000-00-00'}
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all mb-4"
						value={callbackPhone}
						unmask={true}
						ref={ref}
						inputRef={inputRef}
						onAccept={(value) => {
							setCallbackPhone(value);
						}}
						type="tel"
						placeholder="+7 (___) ___-__-__"
						required
					/>
					<div className="flex gap-3">
						<button
							type="submit"
							disabled={isSubmittingCallback}
							className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all disabled:opacity-50"
						>
							{isSubmittingCallback
								? 'Отправляем...'
								: 'Заказать звонок'}
						</button>
						<button
							type="button"
							onClick={() => {
								setShowCallbackModal(false);
								setCallbackMessage('');
								setCallbackPhone('');
							}}
							className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-all"
						>
							Отмена
						</button>
					</div>
				</form>

				{callbackMessage && (
					<div
						className={`mt-4 p-3 rounded-lg text-sm text-center ${
							callbackMessage.includes('Ошибка')
								? 'bg-red-100 text-red-700'
								: 'bg-green-100 text-green-700'
						}`}
					>
						{callbackMessage}
					</div>
				)}
			</div>
		</div>
	);
};

export default CallbackModal;
