-module(webDriver).
%%-export([first_wd/0, defaultSession/0, 
%% Running WebDriver tests
%%runWD/0, runSession/0, withSession/0, finallyClose/0, closeOnException/0]).
-compile(export_all).

%%-import([webDriver.types/0]).
-include("webDriver.hrl").

defaultSession() -> a.

first_wd() -> #wD{name="test"}.

runWD() -> a.
runSession() -> a.
withSession() -> a.
finallyClose() -> a.
closeOnException() -> a.
