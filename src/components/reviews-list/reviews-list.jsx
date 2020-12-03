import React from 'react';
import PropTypes from 'prop-types';

import Review from '../review/review';

<ul className="reviews__list">
  {reviews.map((review, i) => (
    <Review key={`review-${i}`} review={review} />
  ))}
</ul>
