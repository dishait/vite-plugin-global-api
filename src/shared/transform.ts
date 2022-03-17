import MagicString from 'magic-string'

/**
 * 转换逻辑
 */
export const transformScripts = (
	s: MagicString,
	i: string
) => {
	return s.replace(/(<script.*?>)/, ` $1 ${i}`)
}

/**
 * 转换模板
 */
export const transformTemplate = (
	s: MagicString,
	i: string
) => {
	return s.replace('<template>', `<template> ${i}`)
}
