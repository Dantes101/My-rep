import { memo } from 'preact/compat';

import { createClassName } from '../../../helpers/createClassName';
import { Avatar } from '../../Avatar';
import styles from './styles.scss';

export const MessageAvatars = memo(({ avatarResolver = () => null, usernames = [], className, style = {} }) => (
	<div className={createClassName(styles, 'message-avatars', {}, [className])} style={style}>
		{usernames.map((username) => (
			<Avatar src={avatarResolver(username)} description={username} className={createClassName(styles, 'message-avatars__avatar')} />
		))}
	</div>
));
