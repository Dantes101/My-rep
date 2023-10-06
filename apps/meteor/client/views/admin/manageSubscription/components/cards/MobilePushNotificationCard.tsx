import { Box, ProgressBar, Skeleton } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useStatistics } from '../../../../hooks/useStatistics';
import FeatureUsageCard from '../FeatureUsageCard';

const MobilePushNotificationCard = (): ReactElement => {
	const { t } = useTranslation();
	const { data, isLoading } = useStatistics();
	const { push } = data || {};

	const card = {
		title: t('RegisterWorkspace_Features_MobileNotifications_Title'),
		infoText: t('MobilePush_InfoText'),
	};

	const total = 10000;
	const used = push || 0;
	const percentage = (used / total) * 100;
	const closeToLimit = percentage >= 80;

	return (
		<FeatureUsageCard title={card.title} infoText={card.infoText} showUpgradeButton={closeToLimit}>
			{!isLoading && push ? (
				<Box w='full'>
					<Box display='flex' flexGrow='1' justifyContent='space-between' mbe={4}>
						<Box fontScale='c1'>{t('Monthly_usage')}</Box>
						<Box fontScale='c1' color={closeToLimit ? 'font-danger' : 'status-font-on-success'}>
							{used} / {total}
						</Box>
					</Box>

					<ProgressBar percentage={percentage} variant={closeToLimit ? 'danger' : 'success'} />
				</Box>
			) : (
				<Skeleton variant='rect' width='x112' height='x112' />
			)}
		</FeatureUsageCard>
	);
};
export default MobilePushNotificationCard;