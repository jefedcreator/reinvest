"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariableDebtToken__factory = exports.StableDebtToken__factory = exports.DelegationAwareAToken__factory = exports.AToken__factory = exports.base = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.base = __importStar(require("./base"));
var AToken__factory_1 = require("./AToken__factory");
Object.defineProperty(exports, "AToken__factory", { enumerable: true, get: function () { return AToken__factory_1.AToken__factory; } });
var DelegationAwareAToken__factory_1 = require("./DelegationAwareAToken__factory");
Object.defineProperty(exports, "DelegationAwareAToken__factory", { enumerable: true, get: function () { return DelegationAwareAToken__factory_1.DelegationAwareAToken__factory; } });
var StableDebtToken__factory_1 = require("./StableDebtToken__factory");
Object.defineProperty(exports, "StableDebtToken__factory", { enumerable: true, get: function () { return StableDebtToken__factory_1.StableDebtToken__factory; } });
var VariableDebtToken__factory_1 = require("./VariableDebtToken__factory");
Object.defineProperty(exports, "VariableDebtToken__factory", { enumerable: true, get: function () { return VariableDebtToken__factory_1.VariableDebtToken__factory; } });