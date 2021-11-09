const index = require('plugin/index')
function BP(type) {
  return false;
}

function BlockB(json){
  return false;
}
function EntityB(json){
  return false;
}
function ItemB(json){
  return false;
}

function RP(type) {
  return false;
}
function BlockR(json){
  return false;
}
function EntityR(json){
  return false;
}
function ItemR(json){
  return false;
}
function TranslateR(origen, type){
  return false;
}

function Add(json) {
  return false;
}

function MoreAdd(json) {
  return false;
}

function Stop(type) {
  return false;
}

module.exports = { BP, RP, Add, MoreAdd, Stop };