import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Image, Reveal, Container, Grid, Divider, Icon, Dropdown, Menu, Sticky } from 'semantic-ui-react';

class ShipBar extends React.Component {
  render() {
    return (
        <div className="colored banner">EXPLORE EVERYTHING / ADVENTURE EVERYWHERE - <b>VENTURE</b> / WE SHIP WORLD-WIDE
        </div>
    )
  }
}

class MidMenu extends React.Component {
  render() {
    return (
        <div className="black-background midMenu">
          <div className="black-background">
            <Menu inverted secondary>
              <Container>
                <Menu.Item fitted><Icon inverted color="grey" name="facebook f"/></Menu.Item>
                <Menu.Item fitted><Icon inverted color="grey" name="twitter"/></Menu.Item>
                <Menu.Item fitted><Icon inverted color="grey" name="youtube"/></Menu.Item>
                <Menu.Item fitted><Icon inverted color="grey" name="instagram"/></Menu.Item>
                <Menu.Item fitted><Icon inverted color="grey" name="rss"/></Menu.Item>
                <Menu.Item fitted position="right"><Icon inverted color="grey" name="search"/></Menu.Item>
                <Menu.Item fitted><Icon inverted color="grey" name="user"/></Menu.Item>
                <Menu.Item fitted>
                  <Dropdown text="MY CART 0" icon="shop">
                    <Dropdown.Menu>
                      <Dropdown.Item>Your cart is currently empty.</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
              </Container>
            </Menu>
          </div>
          <div className="logo black-background boxLogo">
            <Grid centered className="gridLogo">
              <Image src="https://cdn.shopify.com/s/files/1/0077/5352/t/6/assets/logo.png?7805528210679224734"
                     className="logo" verticalAlign="bottom"/>
            </Grid>
          </div>
          <Sticky className="menuSelect">
            <Grid centered>
              <Menu inverted>
                <Menu.Item>
                  <div className="text">HOME</div>
                </Menu.Item>
                <Menu.Item>
                  <div className="text">MENS</div>
                </Menu.Item>
                <Menu.Item>
                  <div className="text">WOMENS</div>
                </Menu.Item>
                <Menu.Item>
                  <div className="text">KIDS</div>
                </Menu.Item>
                <Menu.Item>
                  <div className="text">HOODIES & CREWNECKS</div>
                </Menu.Item>
                <Menu.Item>
                  <div className="text">ACCESSORIES</div>
                </Menu.Item>
                <Menu.Item>
                  <div className="text">SIGNATURE</div>
                </Menu.Item>
                <Menu.Item>
                  <div className="text">UK SHOP</div>
                </Menu.Item>
              </Menu>
            </Grid>
          </Sticky>
        </div>
    )
  }
}

class ImageEx extends React.Component {
  render() {
    return (
        <Reveal animated='fade' className="menuImg">
          <Reveal.Content visible>
            <Image src="https://cdn.shopify.com/s/files/1/0077/5352/t/6/assets/slide1.jpg?7805528210679224734"/>
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image src="https://cdn.shopify.com/s/files/1/0077/5352/t/6/assets/slide2.jpg?7805528210679224734"/>
          </Reveal.Content>
        </Reveal>
    )
  }
}

class ProductsMenu extends React.Component {
  render() {
    return (
        <Grid centered columns={2}>
          <Container className="productsmenu">
            <div className="productdivider">
              <Divider horizontal><b>LATEST ADDITIONS</b></Divider>
              <Grid centered columns={3} className="gap">
                <column>
                  <row>
                    <Image
                        src="https://cdn.shopify.com/s/files/1/0077/5352/products/Stealth_Monogram_Snapback_01_large.jpg?v=1548259654"
                        className="productitem"/>
                  </row>
                  <row>
                    <div className="text producttext"><b>SYNDICATE ORIGINAL US</b></div>
                    <div className="text producttext"><b>STEALTH MONOGRAM SNAPBACK HAT</b></div>
                    <div className="text pricetext producttext"><b>$25.00</b></div>
                  </row>
                </column>
                <column>
                  <row>
                    <Image
                        src="https://cdn.shopify.com/s/files/1/0077/5352/products/blueprint-front_large.jpg?v=1541708200"
                        className="productitem"/>
                  </row>
                  <row>
                    <div className="text producttext"><b>SYNDICATE ORIGINAL</b></div>
                    <div className="text producttext"><b>BLUEPRINT HOODIE</b></div>
                    <div className="text pricetext producttext"><b>$55.00</b></div>
                  </row>
                </column>
                <column>
                  <row>
                    <Image
                        label={{ as: 'a', color: 'black', corner: 'right', content: 'SOLD OUT' }}
                        src="https://cdn.shopify.com/s/files/1/0077/5352/products/mens_CoA_hoodie_back_large.jpg?v=1539785708"
                        className="productitem"/>
                  </row>
                  <row>
                    <div className="text producttext"><b>SYNDICATE ORIGINAL</b></div>
                    <div className="text producttext"><b>"COATS OF ARMS" HOODIE</b></div>
                    <div className="text pricetext producttext"><b>FROM $50.00-$56.00</b></div>
                  </row>
                </column>
              </Grid>
            </div>
            <div className="productdivider2">
              <Divider horizontal><b>FEATURED COLLECTIONS</b></Divider>
              <Grid centered columns={2} className="gap">
                <column>
                  <div className="fce1 pd2">
                    <div className="ui grid productitem">
                      <div className="middle aligned column">
                        <div className="white-background">
                          <div className="ui grid">
                            <div className="center aligned column">
                              <div className="text"><b>MEN</b></div>
                              <div className="text">33 ITEMS</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </column>
                <column>
                  <div className="fce2 pd2">
                    <div className="ui grid productitem">
                      <div className="middle aligned column">
                        <div className="white-background">
                          <div className="ui grid">
                            <div className="center aligned column">
                              <div className="text"><b>WOMEN</b></div>
                              <div className="text">6 ITEMS</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </column>
              </Grid>
            </div>
          </Container>
        </Grid>
    )
  }
}

class Footer extends React.Component {
  render(){
    return (
        <div className="grey-background topfooter">
          <Container>
            <Grid columns={4}>
              <Grid.Row>
                <Grid.Column>
                  <h4 className="text nobottom">NAVIGATION</h4>
                  <Divider className="notop"/>
                  <div className="text">Search</div>
                  <div className="text">About Us</div>
                  <div className="text">Privacy</div>
                  <div className="text">Contact</div>
                  <div className="text">Shipping, Returns & Exchanges</div>
                  <div className="text">Sizing Chart</div>
                </Grid.Column>
                <Grid.Column>
                  <h4 className="text nobottom">FEATURED COLLECTIONS</h4>
                  <Divider className="notop"/>
                  <div className="text">Mens</div>
                  <div className="text">Womens</div>
                  <div className="text">Kids</div>
                  <div className="text">Accessories</div>
                </Grid.Column>
                <Grid.Column>
                  <h4 className="text nobottom">MORE SYNDICATE</h4>
                  <Divider className="notop"/>
                  <div className="text">Tom's Vlogs</div>
                </Grid.Column>
                <Grid.Column>
                  <Divider hidden/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider hidden/>
            <Divider/>
            <Divider hidden/>
            <Grid centered>
              <Grid.Row>
                <Icon inverted color="grey" name="facebook f" size="big"/>
                <Icon inverted color="grey" name="twitter" size="big"/>
                <Icon inverted color="grey" name="youtube" size="big"/>
                <Icon inverted color="grey" name="instagram" size="big"/>
                <Icon inverted color="grey" name="rss" size="big"/>
              </Grid.Row>
              <Grid.Row>
                <Divider hidden />
              </Grid.Row>
              <Grid.Row>
                <div className="text">YOU'RE VIEWING THE US SHOP. JUMP TO <a href="http://uk.syndicateoriginal.com/"><u>UK
                  SHOP.</u></a></div>
              </Grid.Row>
              <Grid.Row>
                <div className="text">COPYRIGHT © 2019 SYNDICATE ORIGINAL US</div>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
    )
  }
}

class SyndicateReplication extends React.Component {
  render() {
    return (
        <div>
          <ShipBar/>
          <MidMenu/>
          <ImageEx/>
          <ProductsMenu/>
          <Footer/>
        </div>
    );
  }
}

ReactDOM.render(<SyndicateReplication/>, document.getElementById('root'));
