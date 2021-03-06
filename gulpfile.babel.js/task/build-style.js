'use strict';

import gulp from 'gulp';
import glob from 'glob';

import {watch} from './watch';
import clean from '../lib/clean';

import {
  DIR_SRC,
  DIR_DEST,
  SRC_STYLE,
  WATCH_PATTERN_STYLE
} from '../config';

export default function buildStyle() {
  return gulp.src(SRC_STYLE, {base: DIR_SRC})
    .pipe(gulp.dest(DIR_DEST));
}

export function watchStyle() {
  return watch(WATCH_PATTERN_STYLE, () => buildStyle());
}

export function cleanStyle() {
  const sources = glob.sync(SRC_STYLE);
  const targets = sources.map(file => file.replace(DIR_SRC, DIR_DEST));
  return clean(targets);
}
