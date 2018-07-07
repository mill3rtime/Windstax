require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"ViewController":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = (function(superClass) {
  extend(exports, superClass);

  function exports(options) {
    var autoInitial, backButtons, btn, i, len, transitions;
    if (options == null) {
      options = {};
    }
    if (options.width == null) {
      options.width = Screen.width;
    }
    if (options.height == null) {
      options.height = Screen.height;
    }
    if (options.clip == null) {
      options.clip = true;
    }
    if (options.initialViewName == null) {
      options.initialViewName = 'initialView';
    }
    if (options.backButtonName == null) {
      options.backButtonName = 'backButton';
    }
    if (options.animationOptions == null) {
      options.animationOptions = {
        curve: "cubic-bezier(0.19, 1, 0.22, 1)",
        time: .7
      };
    }
    if (options.backgroundColor == null) {
      options.backgroundColor = "black";
    }
    if (options.scroll == null) {
      options.scroll = false;
    }
    if (options.autoLink == null) {
      options.autoLink = true;
    }
    exports.__super__.constructor.call(this, options);
    this.history = [];
    this.onChange("subLayers", (function(_this) {
      return function(changeList) {
        var c, children, i, len, scrollComponent, view;
        view = changeList.added[0];
        if (view != null) {
          view.clip = true;
          view.on(Events.Click, function() {});
          if (_this.scroll) {
            children = view.children;
            scrollComponent = new ScrollComponent({
              name: "scrollComponent",
              width: _this.width,
              height: _this.height,
              parent: view
            });
            scrollComponent.content.backgroundColor = "";
            if (view.width <= _this.width) {
              scrollComponent.scrollHorizontal = false;
            }
            if (view.height <= _this.height) {
              scrollComponent.scrollVertical = false;
            }
            for (i = 0, len = children.length; i < len; i++) {
              c = children[i];
              c.parent = scrollComponent.content;
            }
            view.scrollComponent = scrollComponent;
            return view.size = {
              width: _this.width,
              height: _this.height
            };
          }
        }
      };
    })(this));
    transitions = {
      switchInstant: {},
      fadeIn: {
        newView: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        }
      },
      zoomIn: {
        newView: {
          from: {
            scale: 0.8,
            opacity: 0
          },
          to: {
            scale: 1,
            opacity: 1
          }
        }
      },
      zoomOut: {
        oldView: {
          to: {
            scale: 0.8,
            opacity: 0
          }
        },
        newView: {
          to: {}
        }
      },
      slideInUp: {
        newView: {
          from: {
            y: this.height
          },
          to: {
            y: 0
          }
        }
      },
      slideInRight: {
        newView: {
          from: {
            x: this.width
          },
          to: {
            x: 0
          }
        }
      },
      slideInDown: {
        newView: {
          from: {
            maxY: 0
          },
          to: {
            y: 0
          }
        }
      },
      slideInLeft: {
        newView: {
          from: {
            maxX: 0
          },
          to: {
            maxX: this.width
          }
        }
      },
      moveInUp: {
        oldView: {
          to: {
            y: -this.height
          }
        },
        newView: {
          from: {
            y: this.height
          },
          to: {
            y: 0
          }
        }
      },
      moveInRight: {
        oldView: {
          to: {
            maxX: 0
          }
        },
        newView: {
          from: {
            x: this.width
          },
          to: {
            x: 0
          }
        }
      },
      moveInDown: {
        oldView: {
          to: {
            y: this.height
          }
        },
        newView: {
          from: {
            y: -this.height
          },
          to: {
            y: 0
          }
        }
      },
      moveInLeft: {
        oldView: {
          to: {
            x: this.width
          }
        },
        newView: {
          from: {
            maxX: 0
          },
          to: {
            x: 0
          }
        }
      },
      pushInRight: {
        oldView: {
          to: {
            x: -(this.width / 5),
            brightness: 70
          }
        },
        newView: {
          from: {
            x: this.width
          },
          to: {
            x: 0
          }
        }
      },
      pushInLeft: {
        oldView: {
          to: {
            x: this.width / 5,
            brightness: 70
          }
        },
        newView: {
          from: {
            x: -this.width
          },
          to: {
            x: 0
          }
        }
      },
      pushOutRight: {
        oldView: {
          to: {
            x: this.width
          }
        },
        newView: {
          from: {
            x: -(this.width / 5),
            brightness: 70
          },
          to: {
            x: 0,
            brightness: 100
          }
        }
      },
      pushOutLeft: {
        oldView: {
          to: {
            maxX: 0
          }
        },
        newView: {
          from: {
            x: this.width / 5,
            brightness: 70
          },
          to: {
            x: 0,
            brightness: 100
          }
        }
      },
      slideOutUp: {
        oldView: {
          to: {
            maxY: 0
          }
        },
        newView: {
          to: {}
        }
      },
      slideOutRight: {
        oldView: {
          to: {
            x: this.width
          }
        },
        newView: {
          to: {}
        }
      },
      slideOutDown: {
        oldView: {
          to: {
            y: this.height
          }
        },
        newView: {
          to: {}
        }
      },
      slideOutLeft: {
        oldView: {
          to: {
            maxX: 0
          }
        },
        newView: {
          to: {}
        }
      }
    };
    transitions.slideIn = transitions.slideInRight;
    transitions.slideOut = transitions.slideOutRight;
    transitions.pushIn = transitions.pushInRight;
    transitions.pushOut = transitions.pushOutRight;
    Events.ViewWillSwitch = "viewWillSwitch";
    Events.ViewDidSwitch = "viewDidSwitch";
    Layer.prototype.onViewWillSwitch = function(cb) {
      return this.on(Events.ViewWillSwitch, cb);
    };
    Layer.prototype.onViewDidSwitch = function(cb) {
      return this.on(Events.ViewDidSwitch, cb);
    };
    _.each(transitions, (function(_this) {
      return function(animProps, name) {
        var btn, i, layers, len, viewController;
        if (options.autoLink) {
          layers = Framer.CurrentContext._layers;
          for (i = 0, len = layers.length; i < len; i++) {
            btn = layers[i];
            if (_.includes(btn.name, name)) {
              viewController = _this;
              btn.onClick(function() {
                var anim, linkName;
                anim = this.name.split('_')[0];
                linkName = this.name.replace(anim + '_', '');
                linkName = linkName.replace(/\d+/g, '');
                return viewController[anim](_.find(layers, function(l) {
                  return l.name === linkName;
                }));
              });
            }
          }
        }
        return _this[name] = function(newView, animationOptions) {
          var animObj, hook, incoming, outgoing, ref, ref1, ref2, ref3, ref4, ref5, ref6;
          if (animationOptions == null) {
            animationOptions = _this.animationOptions;
          }
          if (newView === _this.currentView) {
            return;
          }
          newView.parent = _this;
          newView.sendToBack();
          newView.point = {
            x: 0,
            y: 0
          };
          newView.opacity = 1;
          newView.scale = 1;
          newView.brightness = 100;
          if ((ref = _this.currentView) != null) {
            ref.point = {
              x: 0,
              y: 0
            };
          }
          if ((ref1 = _this.currentView) != null) {
            ref1.props = (ref2 = animProps.oldView) != null ? ref2.from : void 0;
          }
          animObj = _.extend({
            properties: (ref3 = animProps.oldView) != null ? ref3.to : void 0
          }, animationOptions);
          _.defaults(animObj, {
            properties: {}
          });
          outgoing = (ref4 = _this.currentView) != null ? ref4.animate(animObj) : void 0;
          newView.props = (ref5 = animProps.newView) != null ? ref5.from : void 0;
          incoming = newView.animate(_.extend({
            properties: (ref6 = animProps.newView) != null ? ref6.to : void 0
          }, animationOptions));
          if (_.includes(name, 'Out')) {
            newView.placeBehind(_this.currentView);
            outgoing.on(Events.AnimationEnd, function() {
              return _this.currentView.bringToFront();
            });
          } else {
            newView.placeBefore(_this.currentView);
          }
          _this.emit(Events.ViewWillSwitch, _this.currentView, newView);
          _this.saveCurrentViewToHistory(name, outgoing, incoming);
          _this.currentView = newView;
          _this.emit("change:previousView", _this.previousView);
          _this.emit("change:currentView", _this.currentView);
          if (incoming.isAnimating) {
            hook = incoming;
          } else {
            hook = outgoing;
          }
          return hook != null ? hook.on(Events.AnimationEnd, function() {
            return _this.emit(Events.ViewDidSwitch, _this.previousView, _this.currentView);
          }) : void 0;
        };
      };
    })(this));
    if (options.initialViewName != null) {
      autoInitial = _.find(Framer.CurrentContext._layers, function(l) {
        return l.name === options.initialViewName;
      });
      if (autoInitial != null) {
        this.switchInstant(autoInitial);
      }
    }
    if (options.initialView != null) {
      this.switchInstant(options.initialView);
    }
    if (options.backButtonName != null) {
      backButtons = _.filter(Framer.CurrentContext._layers, function(l) {
        return _.includes(l.name, options.backButtonName);
      });
      for (i = 0, len = backButtons.length; i < len; i++) {
        btn = backButtons[i];
        btn.onClick((function(_this) {
          return function() {
            return _this.back();
          };
        })(this));
      }
    }
  }

  exports.define("previousView", {
    get: function() {
      return this.history[0].view;
    }
  });

  exports.prototype.saveCurrentViewToHistory = function(name, outgoingAnimation, incomingAnimation) {
    return this.history.unshift({
      view: this.currentView,
      animationName: name,
      incomingAnimation: incomingAnimation,
      outgoingAnimation: outgoingAnimation
    });
  };

  exports.prototype.back = function() {
    var backIn, moveOut, previous;
    previous = this.history[0];
    if (previous.view != null) {
      if (_.includes(previous.animationName, 'Out')) {
        previous.view.bringToFront();
      }
      backIn = previous.outgoingAnimation.reverse();
      moveOut = previous.incomingAnimation.reverse();
      backIn.start();
      moveOut.start();
      this.currentView = previous.view;
      this.history.shift();
      return moveOut.on(Events.AnimationEnd, (function(_this) {
        return function() {
          return _this.currentView.bringToFront();
        };
      })(this));
    }
  };

  return exports;

})(Layer);


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0Ryb3Bib3gvRE9DVU1FTlRTIE9OIERCIEFORCBMT0NBTC9DTVUgQ291cnNld29yay9TUFJJTkcvSXhEUyAyL21vYmlsZSBzZXJ2aWNlIEEyL2ZyYW1lci9XaW5kc3RheCBWMi5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Ecm9wYm94L0RPQ1VNRU5UUyBPTiBEQiBBTkQgTE9DQUwvQ01VIENvdXJzZXdvcmsvU1BSSU5HL0l4RFMgMi9tb2JpbGUgc2VydmljZSBBMi9mcmFtZXIvV2luZHN0YXggVjIuZnJhbWVyL21vZHVsZXMvVmlld0NvbnRyb2xsZXIuY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIiwiY2xhc3MgbW9kdWxlLmV4cG9ydHMgZXh0ZW5kcyBMYXllclxuXHRcdFxuXHRjb25zdHJ1Y3RvcjogKG9wdGlvbnM9e30pIC0+XG5cdFx0b3B0aW9ucy53aWR0aCA/PSBTY3JlZW4ud2lkdGhcblx0XHRvcHRpb25zLmhlaWdodCA/PSBTY3JlZW4uaGVpZ2h0XG5cdFx0b3B0aW9ucy5jbGlwID89IHRydWVcblx0XHRvcHRpb25zLmluaXRpYWxWaWV3TmFtZSA/PSAnaW5pdGlhbFZpZXcnXG5cdFx0b3B0aW9ucy5iYWNrQnV0dG9uTmFtZSA/PSAnYmFja0J1dHRvbidcblx0XHRvcHRpb25zLmFuaW1hdGlvbk9wdGlvbnMgPz0geyBjdXJ2ZTogXCJjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSlcIiwgdGltZTogLjcgfVxuXHRcdG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID89IFwiYmxhY2tcIlxuXHRcdG9wdGlvbnMuc2Nyb2xsID89IGZhbHNlXG5cdFx0b3B0aW9ucy5hdXRvTGluayA/PSB0cnVlXG5cblx0XHRzdXBlciBvcHRpb25zXG5cdFx0QGhpc3RvcnkgPSBbXVxuXG5cdFx0QG9uQ2hhbmdlIFwic3ViTGF5ZXJzXCIsIChjaGFuZ2VMaXN0KSA9PlxuXHRcdFx0dmlldyA9IGNoYW5nZUxpc3QuYWRkZWRbMF1cblx0XHRcdGlmIHZpZXc/XG5cdFx0XHRcdCMgZGVmYXVsdCBiZWhhdmlvcnMgZm9yIHZpZXdzXG5cdFx0XHRcdHZpZXcuY2xpcCA9IHRydWVcblx0XHRcdFx0dmlldy5vbiBFdmVudHMuQ2xpY2ssIC0+IHJldHVybiAjIHByZXZlbnQgY2xpY2stdGhyb3VnaC9idWJibGluZ1xuXHRcdFx0XHQjIGFkZCBzY3JvbGxjb21wb25lbnRcblx0XHRcdFx0aWYgQHNjcm9sbFxuXHRcdFx0XHRcdGNoaWxkcmVuID0gdmlldy5jaGlsZHJlblxuXHRcdFx0XHRcdHNjcm9sbENvbXBvbmVudCA9IG5ldyBTY3JvbGxDb21wb25lbnRcblx0XHRcdFx0XHRcdG5hbWU6IFwic2Nyb2xsQ29tcG9uZW50XCJcblx0XHRcdFx0XHRcdHdpZHRoOiBAd2lkdGhcblx0XHRcdFx0XHRcdGhlaWdodDogQGhlaWdodFxuXHRcdFx0XHRcdFx0cGFyZW50OiB2aWV3XG5cdFx0XHRcdFx0c2Nyb2xsQ29tcG9uZW50LmNvbnRlbnQuYmFja2dyb3VuZENvbG9yID0gXCJcIlxuXHRcdFx0XHRcdGlmIHZpZXcud2lkdGggPD0gQHdpZHRoXG5cdFx0XHRcdFx0XHRzY3JvbGxDb21wb25lbnQuc2Nyb2xsSG9yaXpvbnRhbCA9IGZhbHNlXG5cdFx0XHRcdFx0aWYgdmlldy5oZWlnaHQgPD0gQGhlaWdodFxuXHRcdFx0XHRcdFx0c2Nyb2xsQ29tcG9uZW50LnNjcm9sbFZlcnRpY2FsID0gZmFsc2Vcblx0XHRcdFx0XHRmb3IgYyBpbiBjaGlsZHJlblxuXHRcdFx0XHRcdFx0Yy5wYXJlbnQgPSBzY3JvbGxDb21wb25lbnQuY29udGVudFxuXHRcdFx0XHRcdHZpZXcuc2Nyb2xsQ29tcG9uZW50ID0gc2Nyb2xsQ29tcG9uZW50ICMgbWFrZSBpdCBhY2Nlc3NpYmxlIGFzIGEgcHJvcGVydHlcblx0XHRcdFx0XHQjIHJlc2V0IHNpemUgc2luY2UgY29udGVudCBtb3ZlZCB0byBzY3JvbGxDb21wb25lbnQuIHByZXZlbnRzIHNjcm9sbCBidWcgd2hlbiBkcmFnZ2luZyBvdXRzaWRlLlxuXHRcdFx0XHRcdHZpZXcuc2l6ZSA9IHt3aWR0aDogQHdpZHRoLCBoZWlnaHQ6IEBoZWlnaHR9XG5cblx0XHR0cmFuc2l0aW9ucyA9XG5cdFx0XHRzd2l0Y2hJbnN0YW50OiB7fVxuXHRcdFx0ZmFkZUluOlxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHtvcGFjaXR5OiAwfVxuXHRcdFx0XHRcdHRvOiB7b3BhY2l0eTogMX1cblx0XHRcdHpvb21Jbjpcblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7c2NhbGU6IDAuOCwgb3BhY2l0eTogMH1cblx0XHRcdFx0XHR0bzoge3NjYWxlOiAxLCBvcGFjaXR5OiAxfVxuXHRcdFx0em9vbU91dDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3NjYWxlOiAwLjgsIG9wYWNpdHk6IDB9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0dG86IHt9XG5cdFx0XHRzbGlkZUluVXA6XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3k6IEBoZWlnaHR9XG5cdFx0XHRcdFx0dG86IHt5OiAwfVxuXHRcdFx0c2xpZGVJblJpZ2h0OlxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt4OiBAd2lkdGh9XG5cdFx0XHRcdFx0dG86IHt4OiAwfVxuXHRcdFx0c2xpZGVJbkRvd246XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge21heFk6IDB9XG5cdFx0XHRcdFx0dG86IHt5OiAwfVxuXHRcdFx0c2xpZGVJbkxlZnQ6XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge21heFg6IDB9XG5cdFx0XHRcdFx0dG86IHttYXhYOiBAd2lkdGh9XG5cdFx0XHRtb3ZlSW5VcDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3k6IC1AaGVpZ2h0fVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt5OiBAaGVpZ2h0fVxuXHRcdFx0XHRcdHRvOiB7eTogMH1cblx0XHRcdG1vdmVJblJpZ2h0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7bWF4WDogMH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eDogQHdpZHRofVxuXHRcdFx0XHRcdHRvOiB7eDogMH1cblx0XHRcdG1vdmVJbkRvd246XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHt5OiBAaGVpZ2h0fVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt5OiAtQGhlaWdodH1cblx0XHRcdFx0XHR0bzoge3k6IDB9XG5cdFx0XHRtb3ZlSW5MZWZ0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7eDogQHdpZHRofVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHttYXhYOiAwfVxuXHRcdFx0XHRcdHRvOiB7eDogMH1cblx0XHRcdHB1c2hJblJpZ2h0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7eDogLShAd2lkdGgvNSksIGJyaWdodG5lc3M6IDcwfVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt4OiBAd2lkdGh9XG5cdFx0XHRcdFx0dG86IHt4OiAwfVxuXHRcdFx0cHVzaEluTGVmdDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3g6IEB3aWR0aC81LCBicmlnaHRuZXNzOiA3MH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eDogLUB3aWR0aH1cblx0XHRcdFx0XHR0bzoge3g6IDB9XG5cdFx0XHRwdXNoT3V0UmlnaHQ6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHt4OiBAd2lkdGh9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3g6IC0oQHdpZHRoLzUpLCBicmlnaHRuZXNzOiA3MH1cblx0XHRcdFx0XHR0bzoge3g6IDAsIGJyaWdodG5lc3M6IDEwMH1cblx0XHRcdHB1c2hPdXRMZWZ0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7bWF4WDogMH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eDogQHdpZHRoLzUsIGJyaWdodG5lc3M6IDcwfVxuXHRcdFx0XHRcdHRvOiB7eDogMCwgYnJpZ2h0bmVzczogMTAwfVxuXHRcdFx0c2xpZGVPdXRVcDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge21heFk6IDB9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0dG86IHt9XG5cdFx0XHRzbGlkZU91dFJpZ2h0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7eDogQHdpZHRofVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdHRvOiB7fVxuXHRcdFx0c2xpZGVPdXREb3duOlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7eTogQGhlaWdodH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHR0bzoge31cblx0XHRcdHNsaWRlT3V0TGVmdDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge21heFg6IDB9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0dG86IHt9XG5cblx0XHQjIHNob3J0Y3V0c1xuXHRcdHRyYW5zaXRpb25zLnNsaWRlSW4gPSB0cmFuc2l0aW9ucy5zbGlkZUluUmlnaHRcblx0XHR0cmFuc2l0aW9ucy5zbGlkZU91dCA9IHRyYW5zaXRpb25zLnNsaWRlT3V0UmlnaHRcblx0XHR0cmFuc2l0aW9ucy5wdXNoSW4gPSB0cmFuc2l0aW9ucy5wdXNoSW5SaWdodFxuXHRcdHRyYW5zaXRpb25zLnB1c2hPdXQgPSB0cmFuc2l0aW9ucy5wdXNoT3V0UmlnaHRcblxuXHRcdCMgZXZlbnRzXG5cdFx0RXZlbnRzLlZpZXdXaWxsU3dpdGNoID0gXCJ2aWV3V2lsbFN3aXRjaFwiXG5cdFx0RXZlbnRzLlZpZXdEaWRTd2l0Y2ggPSBcInZpZXdEaWRTd2l0Y2hcIlxuXHRcdExheWVyOjpvblZpZXdXaWxsU3dpdGNoID0gKGNiKSAtPiBAb24oRXZlbnRzLlZpZXdXaWxsU3dpdGNoLCBjYilcblx0XHRMYXllcjo6b25WaWV3RGlkU3dpdGNoID0gKGNiKSAtPiBAb24oRXZlbnRzLlZpZXdEaWRTd2l0Y2gsIGNiKVx0XHRcblxuXHRcdF8uZWFjaCB0cmFuc2l0aW9ucywgKGFuaW1Qcm9wcywgbmFtZSkgPT5cblxuXHRcdFx0aWYgb3B0aW9ucy5hdXRvTGlua1xuXHRcdFx0XHRsYXllcnMgPSBGcmFtZXIuQ3VycmVudENvbnRleHQuX2xheWVyc1xuXHRcdFx0XHRmb3IgYnRuIGluIGxheWVyc1xuXHRcdFx0XHRcdGlmIF8uaW5jbHVkZXMgYnRuLm5hbWUsIG5hbWVcblx0XHRcdFx0XHRcdHZpZXdDb250cm9sbGVyID0gQFxuXHRcdFx0XHRcdFx0YnRuLm9uQ2xpY2sgLT5cblx0XHRcdFx0XHRcdFx0YW5pbSA9IEBuYW1lLnNwbGl0KCdfJylbMF1cblx0XHRcdFx0XHRcdFx0bGlua05hbWUgPSBAbmFtZS5yZXBsYWNlKGFuaW0rJ18nLCcnKVxuXHRcdFx0XHRcdFx0XHRsaW5rTmFtZSA9IGxpbmtOYW1lLnJlcGxhY2UoL1xcZCsvZywgJycpICMgcmVtb3ZlIG51bWJlcnNcblx0XHRcdFx0XHRcdFx0dmlld0NvbnRyb2xsZXJbYW5pbV0gXy5maW5kKGxheWVycywgKGwpIC0+IGwubmFtZSBpcyBsaW5rTmFtZSlcblxuXHRcdFx0QFtuYW1lXSA9IChuZXdWaWV3LCBhbmltYXRpb25PcHRpb25zID0gQGFuaW1hdGlvbk9wdGlvbnMpID0+XG5cblx0XHRcdFx0cmV0dXJuIGlmIG5ld1ZpZXcgaXMgQGN1cnJlbnRWaWV3XG5cblxuXG5cdFx0XHRcdCMgbWFrZSBzdXJlIHRoZSBuZXcgbGF5ZXIgaXMgaW5zaWRlIHRoZSB2aWV3Y29udHJvbGxlclxuXHRcdFx0XHRuZXdWaWV3LnBhcmVudCA9IEBcblx0XHRcdFx0bmV3Vmlldy5zZW5kVG9CYWNrKClcblxuXHRcdFx0XHQjIHJlc2V0IHByb3BzIGluIGNhc2UgdGhleSB3ZXJlIGNoYW5nZWQgYnkgYSBwcmV2IGFuaW1hdGlvblxuXHRcdFx0XHRuZXdWaWV3LnBvaW50ID0ge3g6MCwgeTogMH1cblx0XHRcdFx0bmV3Vmlldy5vcGFjaXR5ID0gMVxuXHRcdFx0XHRuZXdWaWV3LnNjYWxlID0gMVxuXHRcdFx0XHRuZXdWaWV3LmJyaWdodG5lc3MgPSAxMDBcblx0XHRcdFx0XG5cdFx0XHRcdCMgb2xkVmlld1xuXHRcdFx0XHRAY3VycmVudFZpZXc/LnBvaW50ID0ge3g6IDAsIHk6IDB9ICMgZml4ZXMgb2Zmc2V0IGlzc3VlIHdoZW4gbW92aW5nIHRvbyBmYXN0IGJldHdlZW4gc2NyZWVuc1xuXHRcdFx0XHRAY3VycmVudFZpZXc/LnByb3BzID0gYW5pbVByb3BzLm9sZFZpZXc/LmZyb21cblx0XHRcdFx0YW5pbU9iaiA9IF8uZXh0ZW5kIHtwcm9wZXJ0aWVzOiBhbmltUHJvcHMub2xkVmlldz8udG99LCBhbmltYXRpb25PcHRpb25zXG5cdFx0XHRcdF8uZGVmYXVsdHMoYW5pbU9iaiwgeyBwcm9wZXJ0aWVzOiB7fSB9KVxuXHRcdFx0XHRvdXRnb2luZyA9IEBjdXJyZW50Vmlldz8uYW5pbWF0ZSBhbmltT2JqXG5cblx0XHRcdFx0IyBuZXdWaWV3XG5cdFx0XHRcdG5ld1ZpZXcucHJvcHMgPSBhbmltUHJvcHMubmV3Vmlldz8uZnJvbVxuXHRcdFx0XHRpbmNvbWluZyA9IG5ld1ZpZXcuYW5pbWF0ZSBfLmV4dGVuZCB7cHJvcGVydGllczogYW5pbVByb3BzLm5ld1ZpZXc/LnRvfSwgYW5pbWF0aW9uT3B0aW9uc1xuXHRcdFx0XHRcblx0XHRcdFx0IyBsYXllciBvcmRlclxuXHRcdFx0XHRpZiBfLmluY2x1ZGVzIG5hbWUsICdPdXQnXG5cdFx0XHRcdFx0bmV3Vmlldy5wbGFjZUJlaGluZChAY3VycmVudFZpZXcpXG5cdFx0XHRcdFx0b3V0Z29pbmcub24gRXZlbnRzLkFuaW1hdGlvbkVuZCwgPT4gQGN1cnJlbnRWaWV3LmJyaW5nVG9Gcm9udCgpXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRuZXdWaWV3LnBsYWNlQmVmb3JlKEBjdXJyZW50Vmlldylcblx0XHRcdFx0XHRcblx0XHRcdFx0QGVtaXQoRXZlbnRzLlZpZXdXaWxsU3dpdGNoLCBAY3VycmVudFZpZXcsIG5ld1ZpZXcpXG5cdFx0XHRcdFxuXHRcdFx0XHQjIGNoYW5nZSBDdXJyZW50VmlldyBiZWZvcmUgYW5pbWF0aW9uIGhhcyBmaW5pc2hlZCBzbyBvbmUgY291bGQgZ28gYmFjayBpbiBoaXN0b3J5XG5cdFx0XHRcdCMgd2l0aG91dCBoYXZpbmcgdG8gd2FpdCBmb3IgdGhlIHRyYW5zaXRpb24gdG8gZmluaXNoXG5cdFx0XHRcdEBzYXZlQ3VycmVudFZpZXdUb0hpc3RvcnkgbmFtZSwgb3V0Z29pbmcsIGluY29taW5nXG5cdFx0XHRcdEBjdXJyZW50VmlldyA9IG5ld1ZpZXdcblx0XHRcdFx0QGVtaXQoXCJjaGFuZ2U6cHJldmlvdXNWaWV3XCIsIEBwcmV2aW91c1ZpZXcpXG5cdFx0XHRcdEBlbWl0KFwiY2hhbmdlOmN1cnJlbnRWaWV3XCIsIEBjdXJyZW50Vmlldylcblx0XHRcdFx0XG5cdFx0XHRcdGlmIGluY29taW5nLmlzQW5pbWF0aW5nXG5cdFx0XHRcdFx0aG9vayA9IGluY29taW5nIFxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0aG9vayA9IG91dGdvaW5nXG5cdFx0XHRcdGhvb2s/Lm9uIEV2ZW50cy5BbmltYXRpb25FbmQsID0+XG5cdFx0XHRcdFx0QGVtaXQoRXZlbnRzLlZpZXdEaWRTd2l0Y2gsIEBwcmV2aW91c1ZpZXcsIEBjdXJyZW50Vmlldylcblx0XHRcdFx0XG5cblx0XHRpZiBvcHRpb25zLmluaXRpYWxWaWV3TmFtZT9cblx0XHRcdGF1dG9Jbml0aWFsID0gXy5maW5kIEZyYW1lci5DdXJyZW50Q29udGV4dC5fbGF5ZXJzLCAobCkgLT4gbC5uYW1lIGlzIG9wdGlvbnMuaW5pdGlhbFZpZXdOYW1lXG5cdFx0XHRpZiBhdXRvSW5pdGlhbD8gdGhlbiBAc3dpdGNoSW5zdGFudCBhdXRvSW5pdGlhbFxuXG5cdFx0aWYgb3B0aW9ucy5pbml0aWFsVmlldz9cblx0XHRcdEBzd2l0Y2hJbnN0YW50IG9wdGlvbnMuaW5pdGlhbFZpZXdcblxuXHRcdGlmIG9wdGlvbnMuYmFja0J1dHRvbk5hbWU/XG5cdFx0XHRiYWNrQnV0dG9ucyA9IF8uZmlsdGVyIEZyYW1lci5DdXJyZW50Q29udGV4dC5fbGF5ZXJzLCAobCkgLT4gXy5pbmNsdWRlcyBsLm5hbWUsIG9wdGlvbnMuYmFja0J1dHRvbk5hbWVcblx0XHRcdGZvciBidG4gaW4gYmFja0J1dHRvbnNcblx0XHRcdFx0YnRuLm9uQ2xpY2sgPT4gQGJhY2soKVxuXG5cdEBkZWZpbmUgXCJwcmV2aW91c1ZpZXdcIixcblx0XHRcdGdldDogLT4gQGhpc3RvcnlbMF0udmlld1xuXG5cdHNhdmVDdXJyZW50Vmlld1RvSGlzdG9yeTogKG5hbWUsb3V0Z29pbmdBbmltYXRpb24saW5jb21pbmdBbmltYXRpb24pIC0+XG5cdFx0QGhpc3RvcnkudW5zaGlmdFxuXHRcdFx0dmlldzogQGN1cnJlbnRWaWV3XG5cdFx0XHRhbmltYXRpb25OYW1lOiBuYW1lXG5cdFx0XHRpbmNvbWluZ0FuaW1hdGlvbjogaW5jb21pbmdBbmltYXRpb25cblx0XHRcdG91dGdvaW5nQW5pbWF0aW9uOiBvdXRnb2luZ0FuaW1hdGlvblxuXG5cdGJhY2s6IC0+XG5cdFx0cHJldmlvdXMgPSBAaGlzdG9yeVswXVxuXHRcdGlmIHByZXZpb3VzLnZpZXc/XG5cblx0XHRcdGlmIF8uaW5jbHVkZXMgcHJldmlvdXMuYW5pbWF0aW9uTmFtZSwgJ091dCdcblx0XHRcdFx0cHJldmlvdXMudmlldy5icmluZ1RvRnJvbnQoKVxuXG5cdFx0XHRiYWNrSW4gPSBwcmV2aW91cy5vdXRnb2luZ0FuaW1hdGlvbi5yZXZlcnNlKClcblx0XHRcdG1vdmVPdXQgPSBwcmV2aW91cy5pbmNvbWluZ0FuaW1hdGlvbi5yZXZlcnNlKClcblxuXHRcdFx0YmFja0luLnN0YXJ0KClcblx0XHRcdG1vdmVPdXQuc3RhcnQoKVxuXG5cdFx0XHRAY3VycmVudFZpZXcgPSBwcmV2aW91cy52aWV3XG5cdFx0XHRAaGlzdG9yeS5zaGlmdCgpXG5cdFx0XHRtb3ZlT3V0Lm9uIEV2ZW50cy5BbmltYXRpb25FbmQsID0+IEBjdXJyZW50Vmlldy5icmluZ1RvRnJvbnQoKVxuIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFFQUE7QURBQSxJQUFBOzs7QUFBTSxNQUFNLENBQUM7OztFQUVDLGlCQUFDLE9BQUQ7QUFDWixRQUFBOztNQURhLFVBQVE7OztNQUNyQixPQUFPLENBQUMsUUFBUyxNQUFNLENBQUM7OztNQUN4QixPQUFPLENBQUMsU0FBVSxNQUFNLENBQUM7OztNQUN6QixPQUFPLENBQUMsT0FBUTs7O01BQ2hCLE9BQU8sQ0FBQyxrQkFBbUI7OztNQUMzQixPQUFPLENBQUMsaUJBQWtCOzs7TUFDMUIsT0FBTyxDQUFDLG1CQUFvQjtRQUFFLEtBQUEsRUFBTyxnQ0FBVDtRQUEyQyxJQUFBLEVBQU0sRUFBakQ7Ozs7TUFDNUIsT0FBTyxDQUFDLGtCQUFtQjs7O01BQzNCLE9BQU8sQ0FBQyxTQUFVOzs7TUFDbEIsT0FBTyxDQUFDLFdBQVk7O0lBRXBCLHlDQUFNLE9BQU47SUFDQSxJQUFDLENBQUEsT0FBRCxHQUFXO0lBRVgsSUFBQyxDQUFBLFFBQUQsQ0FBVSxXQUFWLEVBQXVCLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQyxVQUFEO0FBQ3RCLFlBQUE7UUFBQSxJQUFBLEdBQU8sVUFBVSxDQUFDLEtBQU0sQ0FBQSxDQUFBO1FBQ3hCLElBQUcsWUFBSDtVQUVDLElBQUksQ0FBQyxJQUFMLEdBQVk7VUFDWixJQUFJLENBQUMsRUFBTCxDQUFRLE1BQU0sQ0FBQyxLQUFmLEVBQXNCLFNBQUEsR0FBQSxDQUF0QjtVQUVBLElBQUcsS0FBQyxDQUFBLE1BQUo7WUFDQyxRQUFBLEdBQVcsSUFBSSxDQUFDO1lBQ2hCLGVBQUEsR0FBc0IsSUFBQSxlQUFBLENBQ3JCO2NBQUEsSUFBQSxFQUFNLGlCQUFOO2NBQ0EsS0FBQSxFQUFPLEtBQUMsQ0FBQSxLQURSO2NBRUEsTUFBQSxFQUFRLEtB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
