'use strict';

const {
	isParenthesized,
	getParenthesizedTimes,
	getParentheses,
	getParenthesizedRange,
	getParenthesizedText,
} = require('./parentheses.js');
const {
	isArrayPrototypeProperty,
	isObjectPrototypeProperty,
} = require('./array-or-object-prototype-property.js');
const {isNodeMatches, isNodeMatchesNameOrPath} = require('./is-node-matches.js');
const {isBooleanNode, getBooleanAncestor} = require('./boolean.js');

module.exports = {
	avoidCapture: require('./avoid-capture.js'),
	escapeString: require('./escape-string.js'),
	getBooleanAncestor,
	getCallExpressionArgumentsText: require('./get-call-expression-arguments-text.js'),
	getCallExpressionTokens: require('./get-call-expression-tokens.js'),
	getParentheses,
	getParenthesizedRange,
	getParenthesizedText,
	getParenthesizedTimes,
	getReferences: require('./get-references.js'),
	getScopes: require('./get-scopes.js'),
	getVariableIdentifiers: require('./get-variable-identifiers.js'),
	hasOptionalChainElement: require('./has-optional-chain-element.js'),
	isArrayPrototypeProperty,
	isBooleanNode,
	isFunctionSelfUsedInside: require('./is-function-self-used-inside.js'),
	isLeftHandSide: require('./is-left-hand-side.js'),
	isLogicalExpression: require('./is-logical-expression.js'),
	isMethodNamed: require('./is-method-named.js'),
	isNodeMatches,
	isNodeMatchesNameOrPath,
	isNodeValueNotDomNode: require('./is-node-value-not-dom-node.js'),
	isNodeValueNotFunction: require('./is-node-value-not-function.js'),
	isObjectPrototypeProperty,
	isOnSameLine: require('./is-on-same-line.js'),
	isParenthesized,
	isSameIdentifier: require('./is-same-identifier.js'),
	isSameReference: require('./is-same-reference.js'),
	isShadowed: require('./is-shadowed.js'),
	isValueNotUsable: require('./is-value-not-usable.js'),
	needsSemicolon: require('./needs-semicolon.js'),
	shouldAddParenthesesToMemberExpressionObject: require('./should-add-parentheses-to-member-expression-object.js'),
	shouldAddParenthesesToCallExpressionCallee: require('./should-add-parentheses-to-call-expression-callee.js'),
	shouldAddParenthesesToAwaitExpressionArgument: require('./should-add-parentheses-to-await-expression-argument.js'),
	singular: require('./singular.js'),
	toLocation: require('./to-location.js'),
	getAncestor: require('./get-ancestor.js'),
};

