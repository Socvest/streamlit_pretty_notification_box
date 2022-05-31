import os
import streamlit.components.v1 as components

_RELEASE = True


if not _RELEASE:
    _notification_box = components.declare_component(
        "notification_box",
        url="http://localhost:3001",
    )
else:
    
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _notification_box = components.declare_component("notification_box", path=build_dir)


def notification_box(icon, title, textDisplay, externalLink, url, styles, key=None, defaultIndex=None):

    return _notification_box(icon=icon, 
                            title=title,
                            textDisplay=textDisplay, 
                            externalLink=externalLink, 
                            url=url, 
                            styles=styles,
                            key=key, 
                            default=defaultIndex)

if not _RELEASE:
    import streamlit as st

    st.subheader("Component with constant args")


    def callback():
        return notification_box(icon='warning', title='Warning', textDisplay='Water levels are high, be careful', externalLink='view more details',
                                url='#', styles=None, key='foo')
    